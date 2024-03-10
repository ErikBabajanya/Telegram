import users from "@/User/users";
import chats from "@/Chats/chats";
import { useEffect, useState } from "react";
import Chats from "@/Chats/interface";
import User from "@/User/interface";
export default function Context() {
  const [myChats, setMyChats] = useState<Chats[] | null>(null);
  const [myContacts, setMyContacts] = useState<User[] | null>(null);
  const myUserId = "8c8efc4b-78f5-4824-99db-2ef41c2c4fd9";
  useEffect(() => {
    const userChats = chats.filter(
      (chat) => chat.chat[0] === myUserId || chat.chat[1] === myUserId
    );
    setMyChats(userChats);
  }, [chats, myUserId]);

  useEffect(() => {
    const fetchMyContacts = () => {
      const contacts: User[] = [];
      myChats?.forEach((chat) => {
        if (chat.chat[0] === myUserId) {
          const contactId = chat.chat[1];
          const user = users.find((user) => user._id === contactId);
          if (user) {
            contacts.push(user);
          }
        } else if (chat.chat[1] === myUserId) {
          const contactId = chat.chat[0];
          const user = users.find((user) => user._id === contactId);
          if (user) {
            contacts.push(user);
          }
        }
      });
      setMyContacts(contacts);
    };

    fetchMyContacts();
  }, [myChats, myUserId, users]);
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, consequuntur. Placeat sequi, pariatur laboriosam laborum necessitatibus amet architecto soluta commodi nostrum odit, eos vel praesentium doloremque possimus libero quibusdam corrupti.";
  return (
    <div
      className="w-full relative overflow-y-auto overflow-x-hidden"
      style={{ height: "calc(100% - 56px)" }}
    >
      <div className="px-2 w-full h-full sm:px-0">
        {myContacts?.map((user, key) => {
          return (
            <div
              key={key}
              className="w-full h-[72px] pr-2 flex items-center transition-colors duration-300 sm:hover:rounded-[0px] hover:bg-[#2b2b2b] hover:rounded-[10px]"
            >
              <button className="w-full h-[72px] absolute z-10"></button>
              <div className="w-full relative flex items-center">
                <div className="w-[54px] h-[54px] rounded-[50%] left-2 bg-[#53edd6] absolute sm:ml-[9px] flex justify-center items-center">
                  <h1 className="font-medium text-[1.25rem] text-[#ffffff]">
                    <div>
                      {user.firstName.charAt(0)}
                      {user.lastName.charAt(0)}
                    </div>
                  </h1>
                </div>
                <div className="w-full pl-[72px] mr-3 sm:pl-[80px]">
                  <div className="w-full flex justify-between">
                    <div className="font-medium text-[#ffffff] ">
                      {user.firstName}
                    </div>
                    <div className="text-[#aaaaaa] text-[12px] leading-[16px]">
                      11:05
                    </div>
                  </div>
                  <div className="w-full text-base text-[#aaaaaa]">
                    <div className="max-w-full text-base text-[#aaaaaa] overflow-hidden whitespace-nowrap">
                      {text}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
