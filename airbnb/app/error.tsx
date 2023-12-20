"use client";

import { useEffect } from "react";
import EmptyState from "./components/EmptyState";
interface ErrorStateProps {
  error: Error;
}

// const ErrorState = ({error}: ErrorstateProps) => {

// }

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {}, [error]);
  return <EmptyState title='Uh Oh' subtitle='Something went wrong!' />;
};
