import React from "react";

type Props = {
  title: string;
  bgImage: string;
  amount: string;
  date: string;
};

const CardAmount: React.FC<Props> = ({ title, bgImage, amount, date }) => {
  return (
    <div
      className="w-[12rem] h-[9rem] object-cover bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex flex-col text-white justify-between w-full items-end pr-6 h-full py-8">
        <span className="text-sm">{title}</span>
        <span className="font-bold">{amount} ฿</span>
        <span className="text-[0.65rem] text-nowrap">{date}</span>
      </div>
    </div>
  );
};

export default CardAmount;
