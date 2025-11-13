"use client";
import React from "react";
import CustomInput from "@/components/shared/common/custom-input";
import CustomButton from "@/components/shared/common/custom-button";
import Link from "next/link";

const SignInPage = () => {
  return (
    <form className="space-y-6">
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
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label
            htmlFor="remember-me"
            className="block ml-2 text-sm text-gray-900"
          >
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <Link
            href="/auth/forgot-password"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
      <CustomButton
        btnText="Sign In"
        AdditionalStyle="w-full !bg-black px-4 py-2 rounded-lg hover:opacity-60 !text-white"
      />

      <div className="text-sm text-center">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/auth/signup"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignInPage;
