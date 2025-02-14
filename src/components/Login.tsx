"use client";

import { useNavigate } from "@/hooks/useNavigate";
import { auth } from "@/lib/api";
import { LoginImage } from "@/utils/constrants/localImages";
import { ROUTES } from "@/utils/constrants/routes";
import { Label } from "@radix-ui/react-label";
import { AlertCircle } from "lucide-react";
import { Turnstile } from "next-turnstile";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LableInput from "./shared/LableInput";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { HTTP } from "@/utils/constrants/http";

const Login = () => {
  const { push } = useNavigate();
  const [turnstileStatus, setTurnstileStatus] = useState<
    "success" | "error" | "expired" | "required"
  >("required");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [turnstileToken, setTurnstileToken] = useState("token captcha");

  const handleForgotPassword = () => {
    push(ROUTES.forgotPassword);
  };

  useEffect(() => {
    const baseApi = process.env.NEXT_PUBLIC_API_URL;
    console.log("🚀 ~ useEffect ~ baseApi:", baseApi);
    console.log("turnstileToken", turnstileToken);
  }, [turnstileToken]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!formRef.current) {
      setIsLoading(false);
      return;
    }

    if (turnstileStatus !== "success") {
      setError("Please verify you are not a robot");
      setIsLoading(false);
      return;
    }

    const formData = new FormData(formRef.current);

    const token = formData.get("cf-turnstile-response");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("🚀 ~ handleSubmit ~ token:", token);
    console.log("🚀 ~ handleSubmit ~ email:", email);
    console.log("🚀 ~ handleSubmit ~ password:", password);

    try {
      const response = await auth.post("/api/v1/auth/client-login", {
        email,
        password,
        token: 'token captcha',
      });

      console.log('response', response)

      const { data } = response

      if (data.statusCode === HTTP.OK) {
        push(ROUTES.home);
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-login h-screen  w-full bg-cover flex justify-center items-center flex-col">
      <Image src={LoginImage.logo} alt={"logo"} width={130} height={122} />
      <Label className="mt-6 font-bold">สถาบันวิชาการป้องกันประเทศ</Label>
      <Label className="mt-3">National Defence Studies Institute</Label>
      <Label className="mt-3 text-[2rem] font-extrabold">เข้าสู่ระบบ</Label>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="w-screen flex justify-start flex-col px-10">
          <LableInput text="อีเมลหรือชื่อผู้ใช้งาน: " />
          <Input
            name="email"
            type="text"
            placeholder="กรุณากรอกอีเมลหรือชื่อผู้ใช้งาน"
            className="bg-white"
          />
        </div>
        <div className="w-screen flex justify-start flex-col px-10">
          <LableInput text="รหัสผ่าน: " />
          <Input
            name="password"
            type="password"
            placeholder="กรุณากรอกรหัสผ่าน"
            className="bg-white"
          />
        </div>

        <div className="w-screen flex justify-end flex-row px-10 mt-5">
          <Label onClick={handleForgotPassword}>ลืมรหัสผ่าน</Label>
        </div>

        <div className="w-screen flex justify-end flex-col px-10 mt-5">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            retry="auto"
            refreshExpired="auto"
            sandbox={process.env.NODE_ENV === "development"}
            onError={() => {
              setTurnstileStatus("error");
              setError("Security check failed. Please try again.");
            }}
            onExpire={() => {
              setTurnstileStatus("expired");
              setError("Security check expired. Please verify again.");
            }}
            onLoad={() => {
              setTurnstileStatus("required");
              setError(null);
            }}
            onVerify={(token) => {
              console.log("token", token);
              setTurnstileToken(token);
              setTurnstileStatus("success");
              setError(null);
            }}
          />
          {error && (
            <div
              className="flex items-center gap-2 text-red-500 text-sm mb-2"
              aria-live="polite"
            >
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}
        </div>

        <div className="w-screen flex justify-end flex-row px-10 mt-5">
          <Button type="submit" className="w-full" disabled={isLoading}>
            เข้าสู่ระบบ
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
