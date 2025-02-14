import React from "react";
import MenuItem from "./MenuItem";
import PromotionsIcon from "./PromotionsIcon";
import ProfileIcon from "./ProfileIcon";
import HomeIcon from "./HomeIcon";
import ScanIcon from "./ScanIcon";
import HistoryIcon from "./HistoryIcon";

const NavigationBar = () => {
  return (
    <div className="absolute bottom-0 flex w-screen rounded-t-xl shadow-[0px_1px_20px_10px_#00000024]">
      <div className="flex justify-between w-screen relative">
        <div className="my-4 px-4 flex gap-4 justify-between ml-2">
          <MenuItem icon={<HomeIcon />} menuName={"หน้าแรก"} />
          <MenuItem icon={<PromotionsIcon />} menuName={"โปรโมชั่น"} />
        </div>

        <div className="my-4 px-4 flex gap-6 mr-6">
          <MenuItem icon={<HistoryIcon />} menuName={"ประวัติ"} />
          <MenuItem icon={<ProfileIcon />} menuName={"ฉัน"} />
        </div>
      </div>
      <div
        className="absolute"
        style={{
          top: "-17%",
          left: "42%",
        }}
      >
        <MenuItem icon={<ScanIcon />} menuName={""} />
      </div>
    </div>
  );
};

export default NavigationBar;
