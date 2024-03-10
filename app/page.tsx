"use client";
import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import Chatlist from "@/components/chatList/chatList";
import Container from "@/components/chatsContainer/container";

export default function Home() {
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const size = useWindowSize();

  useEffect(() => {
    setScreenWidth(size.width);
  }, [size]);

  return (
    <div className="w-full h-screen flex img sm:w-full bg">
      <div
        className={`${
          chatOpen ? "lg:hidden" : "md:w-[424px]"
        } sm:w-full md:w-[424px] lg:w-[424px] xl:w-[424px] 2xl:w-[424px] h-full bg-[#181818] transition-width duration-300`}
      >
        <Chatlist />
      </div>
      <div
        className={`${
          chatOpen ? "w-[calc(100%-424px)] lg:w-full" : "hidden"
        } transition-width duration-300`}
      >
        <Container />
      </div>
    </div>
  );
}
