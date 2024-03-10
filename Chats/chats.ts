import Chats from "./interface";
import users from "@/User/users";

// const generateId = (): string => {
//     const characters = '0123456789abcdef';
//     const segments = [8, 4, 4, 4, 12]; // Length of each segment in the UUID

//     let id = '';
//     for (let i = 0; i < segments.length; i++) {
//         for (let j = 0; j < segments[i]; j++) {
//             id += characters.charAt(Math.floor(Math.random() * characters.length));
//         }
//         if (i < segments.length - 1) {
//             id += '-';
//         }
//     }

//     return id;
// };

const chats: Chats[] = [
    {
        chatId: "1",
        chat: [users[0]._id, users[1]._id]
    },
    {
        chatId: "2",
        chat: [users[2]._id, users[3]._id]
    },
    {
        chatId: "3",
        chat: [users[4]._id, users[5]._id]
    },
    {
        chatId: "4",
        chat: [users[6]._id, users[7]._id]
    },
    {
        chatId: "5",
        chat: [users[8]._id, users[9]._id]
    },
    {
        chatId: "6",
        chat: [users[0]._id, users[3]._id]
    },
    {
        chatId: "7",
        chat: [users[1]._id, users[4]._id]
    },
    {
        chatId: "8",
        chat: [users[2]._id, users[5]._id]
    },
    {
        chatId: "9",
        chat: [users[6]._id, users[8]._id]
    },
    {
        chatId: "10",
        chat: [users[7]._id, users[9]._id]
    }
];
export default chats