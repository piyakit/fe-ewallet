"use client";

import { HomeImage } from "@/utils/constrants/localImages";
import Image from "next/image";
import React from "react";
import CardAmount from "./shared/CardAmount";

const Home = () => {
  return (
    <div className="">
      <div className="bg-blue-400 w-screen flex flex-row justify-between pt-[4rem] pb-[2rem] px-[1rem]">
        <div className="flex flex-row">
          <Image src={HomeImage.profile} alt={""} width={46} height={46} className="object-contain w-[3rem]" />
          <div className="flex flex-col text-white ml-2">
            <span>ยินดีต้อนรับ!</span>
            <span className="font-bold text-[1rem]">จักรพงษ์ องศ์ใหญ่</span>
          </div>
        </div>
        <div className="flex flex-row bg-white rounded-2xl px-4 py-2 border-[#EBEBEB] border-2">
          <Image src={HomeImage.wallet} alt={""} width={28} height={28} />
          <div className="flex flex-col ml-2">
            <span className="text-[.7rem]">ยอดวอลเล็ท</span>
            <span className="font-bold">500 ฿</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white rounded-t-2xl absolute top-[9rem]">
        <div className="rounded-t-2xl">
          <Image
            src={HomeImage.banner}
            alt={"home banner"}
            width={358}
            height={212}
            className="rounded-2xl my-4"
          />
          <div className="flex flex-row gap-2 mb-4 justify-center">
            <Image src={HomeImage.dot4} alt={""} width={8} height={8} />
            <Image src={HomeImage.dot1} alt={""} width={24} height={8} />
            <Image src={HomeImage.dot4} alt={""} width={8} height={8} />
          </div>
        </div>
        <div className="bg-[#F7F7F7] h-[1rem] w-screen"></div>
        <div className="w-screen">
          <div className="flex flex-row justify-start ml-3">
            <div className="w-[0.5rem] bg-[#007AFF] mr-2"></div>
            <span className="font-bold">สรุปยอดค่าใช้จ่าย</span>
          </div>
          <div className="grid grid-cols-2 gap-0">
            <CardAmount
              title={"ยอดประจำเดือน มกราคม"}
              bgImage={HomeImage.frameMonth}
              amount={"1,500.00"}
              date={"อัพเดทข้อมูลล่าสุด 25/01/2025"}
            />
            <CardAmount
              title={"ยอดค่าใช้จ่ายสะสมทั้งหมด"}
              bgImage={HomeImage.frameAmount}
              amount={"55,500.00"}
              date={"อัพเดทข้อมูลล่าสุด 25/01/2025"}
            />
            <CardAmount
              title={"รายวัน"}
              bgImage={HomeImage.frameDay}
              amount={"50.00"}
              date={"วันที่ 25/01/2025"}
            />
            <CardAmount
              title={"รายสัปดาห์"}
              bgImage={HomeImage.frameWeek}
              amount={"350.00"}
              date={"วันที่ 20/01/2025 - 26/01/2025"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
