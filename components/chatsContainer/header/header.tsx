import { IoCallOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function MessagesHeader() {
  return (
    <div className="w-full h-14">
      <div className="w-full h-14 bg-[#181818] relative">
        <button className="w-full h-full absolute"></button>
        <div className="w-full h-14 px-4">
          <div className="w-full h-14 flex items-center justify-between">
            <div className="max-w-full h-full py-1 pl-[3px] flex items-center">
              <button className="lg:flex hidden w-[40px] h-[40px] p-2 relative rounded-[50%] hover:bg-[#aaaaaa14] mr-2">
                <div className="w-[40px] h-[40px]"></div>
                <IoMdArrowRoundBack className="w-6 h-6 absolute top-2 text-[#aaaaaa]" />
              </button>
              <div className="flex items-center">
                <div className="min-w-[42px] h-[42px] rounded-[50%] bg-[#53edd6] flex justify-center items-center">
                  <h1 className="font-medium text-[1.25rem] text-[#ffffff]">
                    M
                  </h1>
                </div>
                <div className="w-full h-full pl-[18px]">
                  <div className="w-full">
                    <div className="leading-[1.3125] text-[#fff]">Manvel</div>
                  </div>
                  <div className="w-full ">
                    <div className="text-[#aaaaaa] text-[0.875rem]">
                      Last seen
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[144px] h-[40px]">
              <button className="w-[40px] h-[40px] p-2 relative rounded-[50%] hover:bg-[#aaaaaa14]">
                <div className="w-[40px] h-[40px]"></div>
                <IoCallOutline className="w-6 h-6 absolute top-2 text-[#aaaaaa]" />
              </button>
              <button className="w-[40px] h-[40px] p-2 relative rounded-[50%] hover:bg-[#aaaaaa14]">
                <div className="w-[40px] h-[40px]"></div>
                <IoSearch className="w-6 h-6 absolute top-2 text-[#aaaaaa]" />
              </button>
              <button className="w-[40px] h-[40px] p-2 relative rounded-[50%] hover:bg-[#aaaaaa14]">
                <div className="w-[40px] h-[40px]"></div>
                <CiMenuKebab className="w-6 h-6 absolute top-2 text-[#aaaaaa]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
