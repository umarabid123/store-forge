"use client";
import React from "react";
import { usePathname } from "next/navigation";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  let title = "";
  let subTitle = "";

  if (pathname === "/auth/signin") {
    title = "Sign In";
    subTitle = "Welcome back! Please sign in to your account.";
  } else if (pathname === "/auth/signup") {
    title = "Sign Up";
    subTitle = "Create an account to get started.";
  } else if (pathname === "/auth/forgot-password") {
    title = "Forgot Password";
    subTitle = "Enter your email to reset your password.";
  } else if (pathname === "/auth/otp") {
    title = "Enter OTP";
    subTitle = "Check your email for the OTP.";
  } else if (pathname === "/auth/change-password") {
    title = "Change Password";
    subTitle = "Enter your new password.";
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="mt-2 text-sm text-gray-600">{subTitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
