"use client";
import React from "react";
import CustomInput from "@/components/shared/common/custom-input";
import CustomButton from "@/components/shared/common/custom-button";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <form className="space-y-6">
      <CustomInput
        label="Name"
        type="text"
        name="name"
        placeholder="Enter your name"
        required
      />
      <CustomInput
        label="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
      <CustomInput
        label="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />
      <CustomInput
        label="Confirm Password"
        type="password"
        name="confirm-password"
        placeholder="Confirm your password"
        required
      />
      <CustomButton
        btnText="Sign Up"
        AdditionalStyle="w-full !bg-black px-4 py-2 rounded-lg hover:opacity-60 !text-white"
      />
      <div className="text-sm text-center \">
        <p className="text-gray-600">
          Already have an account?{" "}
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

export default SignUpPage;
