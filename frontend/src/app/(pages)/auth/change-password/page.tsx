"use client";
import React from "react";
import CustomInput from "@/components/shared/common/custom-input";
import CustomButton from "@/components/shared/common/custom-button";
import Link from "next/link";

const ChangePasswordPage = () => {
  return (
    <form className="space-y-6">
      <CustomInput
        label="New Password"
        type="password"
        name="new-password"
        placeholder="Enter your new password"
        required
      />
      <CustomInput
        label="Confirm New Password"
        type="password"
        name="confirm-new-password"
        placeholder="Confirm your new password"
        required
      />
      <CustomButton
        btnText="Change Password"
        AdditionalStyle="w-full !bg-black px-4 py-2 rounded-lg hover:opacity-60 !text-white"
      />
      <div className="text-sm text-center">
        <p className="text-gray-600">
          <Link
            href="/auth/signin"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Back to Sign In
          </Link>
        </p>
      </div>
    </form>
  );
};

export default ChangePasswordPage;
