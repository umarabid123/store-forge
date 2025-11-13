"use client";
import React from "react";
import CustomInput from "@/components/shared/common/custom-input";
import CustomButton from "@/components/shared/common/custom-button";
import Link from "next/link";

const ForgotPasswordPage = () => {
  return (
    <form className="space-y-6">
      <CustomInput
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <CustomButton
        btnText="Send Reset Link"
      AdditionalStyle="w-full !bg-black px-4 py-2 rounded-lg hover:opacity-60 !text-white"
      />
      <div className="text-sm text-center">
        <p className="text-gray-600">
          Remember your password?{" "}
          <Link
            href="/auth/signin"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};

export default ForgotPasswordPage;
