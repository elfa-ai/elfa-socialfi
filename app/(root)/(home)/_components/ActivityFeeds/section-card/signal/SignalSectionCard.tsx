import React from "react";

const SignalSectionCard = ({ data }: any) => {
  return (
    <div className="flex items-center gap-1 flex-col w-full">
      {data[0].contents.map((tokenCardDatum: any) => (
        <div
          className="w-full py-1 flex gap-3 flex-col"
          key={tokenCardDatum.title}
        >
          <div className="flex justify-start items-center gap-4 p-6 bg-gray-100 rounded-lg">
            <div className="">
              <div className="flex justify-between items-center">
                <div className="font-semibold text-gray-900">
                  {tokenCardDatum.title}
                </div>
                <div className="font-semibold text-gray-900">
                  {tokenCardDatum.date}
                </div>
              </div>
              <div className="mt-2 text-gray-700">{tokenCardDatum.story}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SignalSectionCard;
