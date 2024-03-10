import { FaRegSmile } from "react-icons/fa";
import { IoAttachOutline } from "react-icons/io5";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { useHover } from "@uidotdev/usehooks";

export default function Footer() {
  return (
    <div className="w-full h-[58px] flex items-end justify-center">
      <div className="max-w-[540px] w-full h-[58px]">
        <div className="w-full h-full pb-2 px-[13px]">
          <div className=" h-full bg-[#181818] rounded-2xl	">
            <div className="w-full h-full flex items-center">
              <div className="min-w-[34px] h-[34px] flex justify-center items-center">
                <FaRegSmile className={`w-6 h-6 text-[#aaaaaa] `} />
              </div>
              <input className="w-full bg-transparent h-full" />
              <div className="min-w-[34px] h-[34px] flex justify-center items-center">
                <IoAttachOutline className="w-6 h-6 text-[#aaaaaa]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
