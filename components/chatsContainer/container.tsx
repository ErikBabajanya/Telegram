import MessagesHeader from "./header/header";
import Footer from "./footer/footer";
import Messages from "./messages/messages";
export default function Container() {
  return (
    <div className="w-full h-full">
      <MessagesHeader />
      <Messages />
      <Footer />
    </div>
  );
}
