import { Label } from "@radix-ui/react-label";
import React from "react";

type Props = {
  text: string;
};

const LableInput: React.FC<Props> = ({ text }) => {
  return (
    <div className=" flex justify-start flex-row items-end">
      <Label className="mt-3">{text}</Label>
      <Label className="text-red-700 ml-2">*</Label>
    </div>
  );
};

export default LableInput;
