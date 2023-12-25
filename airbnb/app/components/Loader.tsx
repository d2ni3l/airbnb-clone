"use client";
import { BarLoader } from "react-spinners";
import React from "react";

export default function Loader() {
  return (
    <div className='h-[70vh flex flex-col justify-center items-center'>
      <BarLoader color='red' />
    </div>
  );
}
