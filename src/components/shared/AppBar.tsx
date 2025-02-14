import { ArrowLeft } from "lucide-react";
import React from "react";

type Props = {
  text: string;
  handleOnClick: () => void;
};

const AppBar: React.FC<Props> = ({ text, handleOnClick }) => {
  return (
    <div>
      <div className="my-5 mx-4 flex flex-row justify-center items-center">
        <ArrowLeft
          className="absolute w-full justify-start flex left-[-10rem]"
          onClick={handleOnClick}
        />
        <span className="text-[2rem]">{text}</span>
      </div>
      <hr />
    </div>
  );
};

export default AppBar;
