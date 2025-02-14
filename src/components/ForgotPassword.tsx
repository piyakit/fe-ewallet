"use client";

import React from "react";
import AppBar from "./shared/AppBar";
import { useNavigate } from "@/hooks/useNavigate";
import Image from "next/image";
import { ForgotPassImages } from "@/utils/constrants/localImages";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import LableInput from "./shared/LableInput";
import { Input } from "./ui/input";
import { ROUTES } from "@/utils/constrants/routes";

const ForgotPassword = () => {
  const { replace } = useNavigate();

  const handleBackToLogin = () => {
    replace(ROUTES.login);
  };
  return (
    <div>
      <AppBar text="ลืมรหัสผ่าน" handleOnClick={handleBackToLogin} />
      <div className="flex flex-col justify-between h-[50rem] max-h-[84vh]">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={ForgotPassImages.logo}
            alt={"forgot password logo"}
            width={116}
            height={116}
            className="mt-5"
          />
          <Label className="mt-3 text-[2rem] font-extrabold">ลืมรหัสผ่าน</Label>
          <Label className="mt-3 text-center mx-[2rem] text-[#A8A8A8]">
            กรุณากรอกอีเมล และทางเราจะส่งลิงก์กลับไปให้คุณ
            เพื่อทำการตั้งรหัสผ่านใหม่
          </Label>
          <div className="flex justify-start w-full px-[2rem] flex-col">
            <LableInput text="อีเมล: " />
            <Input type="email" placeholder="กรุณากรอกอีเมล" />
          </div>
        </div>

        <Button className="mb-6 rounded-full mx-[2rem]">ยืนยัน</Button>
      </div>
    </div>
  );
};

export default ForgotPassword;
