"use client";
import React from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Model from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Heading from "../Heading";
import Input from "../inputs/Input";
import Button from "../Button";
import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";

export default function RegisterModel() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then(() => {
        toast.success("Signed up");
        registerModal.onClose();
        loginModal.onOpen()
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
        registerModal.onClose();
      });
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading title='Welcome to Airbnb' subtitle='Create an account!' center />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        label='Password'
        type='password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='flex flex-col gap-4 mt-3'>
      <hr />
      <Button
        outline
        title='Continue with Google'
        Icon={FcGoogle}
        onClick={() => signIn("google")}
      />

      <div
        className='
        text-neutral-500 
        text-center 
        mt-4 
        font-light
      '>
        <p>
          Already have an account?
          <span
            // onClick={onToggle}
            className='
            text-neutral-800
            cursor-pointer 
            hover:underline
          '>
            {" "}
            Log in
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <div>
      {registerModal.isOpen && (
        <Model
          disabled={isLoading}
          isOpen={registerModal.isOpen}
          title='Register'
          actionLabel='Continue'
          onClose={registerModal.onClose}
          onSubmit={handleSubmit(onSubmit)}
          body={bodyContent}
          footer={footerContent}
        />
      )}
    </div>
  );
}
