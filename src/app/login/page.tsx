import Login from "@/components/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to the app",
};

const Page = () => {
  return (
    <div className="h-screen bg-amber-400 w-screen">
      <Login />
    </div>
  );
};

export default Page;
