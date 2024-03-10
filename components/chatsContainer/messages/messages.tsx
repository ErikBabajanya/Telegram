export default function Messages() {
  const messages = [
    {
      sender: "Erik",
      text: "ha vor tenam ))",
    },
    {
      sender: "Manvel",
      text: "Ցույց կտաս կարողա ճանաչեմ",
    },
    {
      sender: "Erik",
      text: "fralu",
    },
    {
      sender: "Manvel",
      text: "Հելել էիր վերև?",
    },
    {
      sender: "Erik",
      text: "verevi hargner",
    },
    {
      sender: "Erik",
      text: "es dranq chem tarberum",
    },
  ];
  return (
    <div className="h-[calc(100%-114px)] w-full ">
      <div className="w-full px-[173px] h-full">
        <div className="w-full h-full flex flex-col-reverse ">
          {messages.map((obj, key) => {
            if (obj.sender == "Erik") {
              return (
                <div
                  key={key}
                  className="min-w-[56px] max-w-full flex justify-end mb-1"
                >
                  <div className="max-w-[480px] text-[#fff] bg-[#8774e1] p-1.5 rounded-xl">
                    {obj.text}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={key} className="min-w-[56px] max-w-full mb-1 flex">
                  <div className="max-w-[480px] text-[#fff] bg-[#212121] p-1.5 rounded-xl">
                    {obj.text}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
