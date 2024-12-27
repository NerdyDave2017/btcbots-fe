import React from "react";

const Events = () => {
  const eventData = [
    {
      dateTime: "2023/02/24 6:44 PM",
      event:
        "Placing TakeProfit trade, Price: market size: 20.791599 USDT (0.000832 BTC), the price should rise for 1.08% to close the deal",
    },
    {
      dateTime: "2023/02/24 6:44 PM",
      event:
        "Placing TakeProfit trade, Price: market size: 20.791599 USDT (0.000832 BTC)",
    },
    {
      dateTime: "2023/02/24 6:44 PM",
      event:
        "Cancelling TakeProfit trade, Price: market size: 20.791599 USDT (0.000832 BTC)",
    },
    {
      dateTime: "2023/02/24 6:44 PM",
      event: "Placing safety trade out of 6, Price: $2506.34 (0.010028 BTC)",
    },
  ];

  return (
    <div className="w-full xl:w-[679px] h-[268px] py-4 bg-[#eaf0f6] rounded-[32px] flex-col justify-start items-start gap-4 inline-flex overflow-scroll">
      <div className="self-stretch px-4 flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch justify-between items-start inline-flex">
          <div className="w-[140px] text-[#090909] text-base font-normal font-['Sora']">
            Date/Time
          </div>
          <div className="w-[450px] text-[#090909] text-base font-normal font-['Sora']">
            Event
          </div>
        </div>
      </div>
      <div className="w-full px-4">
        <div className="w-full border border-[#E3E3E3]/50"></div>
      </div>

      {eventData.map((event, index) => (
        <div
          key={index}
          className="self-stretch px-4 flex-col justify-start items-start gap-3 flex"
        >
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="text-[#090909] text-sm font-light font-['Sora']">
              {event.dateTime}
            </div>
            <div className="w-[450px] text-[#090909] text-sm font-light font-['Sora']">
              {event.event}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
