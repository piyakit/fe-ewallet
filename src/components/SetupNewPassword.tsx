"use client";

import React from "react";
import AppBar from "./shared/AppBar";
import { useNavigate } from "@/hooks/useNavigate";
import { ROUTES } from "@/utils/constrants/routes";
import Image from "next/image";
import { ForgotPassImages } from "@/utils/constrants/localImages";
import { Label } from "@radix-ui/react-label";
import LableInput from "./shared/LableInput";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const SetupNewPassword = () => {
  const { push } = useNavigate();

  const handleSetupNewPassword = () => {
    push(ROUTES.forgotPassword);
  };

  return (
    <div>
      <AppBar
        text="ตั้งค่ารหัสผ่านใหม่"
        handleOnClick={handleSetupNewPassword}
      />
      <div className="flex flex-col justify-between h-[50rem] max-h-[84vh]">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={ForgotPassImages.logo}
            alt={"forgot password logo"}
            width={116}
            height={116}
            className="mt-5"
          />
          <Label className="mt-3 text-[2rem] font-extrabold">
            ตั้งค่ารหัสผ่านใหม่
          </Label>
          <Label className="mt-3 text-center mx-[2rem] text-[#A8A8A8]">
            กรุณากรอกรหัสผ่านใหม่เพื่อเข้าถึงบัญชีของคุณ
          </Label>
          <div className="flex justify-start w-full px-[2rem] flex-col">
            <LableInput text="รหัสผ่านใหม่: " />
            <Input type="password" placeholder="กรุณากรอกรหัสผ่าน" className="mt-2" />
            <LableInput text="ยืนยันรหัสผ่าน: " />
            <Input type="password" placeholder="กรุณากรอกยืนยันรหัสผ่าน" className="mt-2" />
          </div>
        </div>

        <Button className="mb-6 rounded-full mx-[2rem]">ยืนยัน</Button>
      </div>
    </div>
  );
};

export default SetupNewPassword;
