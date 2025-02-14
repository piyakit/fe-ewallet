import ForgotPassword from "@/components/ForgotPassword";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot password",
  description: "Forgot password",
};

const Page = () => {
  return (
    <div>
      <ForgotPassword />
    </div>
  );
};

export default Page;
