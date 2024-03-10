import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <div className="px-4 h-14 w-full sm:px-2 sm:w-full flex items-center">
      <div className="w-10 h-10 ">
        <button className="p-2 rounded-[50%] transition-colors duration-300 hover:bg-[#333333]">
          <IoMenu className="w-6 h-6 text-gray-400" />
        </button>
      </div>
      <div className="relative w-full h-[42px] px-[7px] flex items-center justify-end">
        <input
          className="pl-11 w-full h-full rounded-[22px] bg-[#181818] text-[#ffffff] transition-colors duration-300 border border-[1px] border-[#2f2f2f] hover:border-[#707579] focus:border-[#8774e1] focus:border-2 focus:outline-none"
          placeholder="Search"
        />
        <div className="absolute w-6 h-6 left-5">
          <IoSearch className="text-gray-400 w-6 h-6" />
        </div>
        <div className="w-8 h-8 rounded-[50%] bg-[#707579] absolute right-3 justify-center items-center flex">
          <div className="w-7 h-7 bg-black rounded-[50%]"></div>
        </div>
      </div>
    </div>
  );
}
