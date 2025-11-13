"use client";
import React from "react";
import OtpInput from "@/components/shared/common/otp-input";
import CustomButton from "@/components/shared/common/custom-button";
import Link from "next/link";

const OtpPage = () => {
  return (
    <div className="space-y-6">
      <OtpInput />
      <CustomButton
        btnText="Verify OTP"
        AdditionalStyle="w-full !bg-black px-4 py-2 rounded-lg hover:opacity-60 !text-white"
      />
      <div className="text-sm text-center">
        <p className="text-gray-600">
          Didn't receive the code?{" "}
          <button className="font-medium text-indigo-600 hover:text-indigo-500">
            Resend
          </button>
        </p>
      </div>
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
    </div>
  );
};

export default OtpPage;
