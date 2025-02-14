import NavigationBar from "@/components/NavigationBar";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="">
      {children}
      <NavigationBar />
    </div>
  );
};

export default MainLayout;
