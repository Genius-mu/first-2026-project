"use client";

import { useState } from "react";

type Card = {
  selectedOpt: string;
  Options: string[];
  h2Val: string;
};

type TabsData = {
  Browse: Card[];
  Rent: Card[];
  Buy: Card[];
};

const Section1 = () => {
  const [activeTab, setActiveTab] = useState<"Browse" | "Rent" | "Buy">(
    "Browse"
  );
  const [values, setValues] = useState<string[]>(["", "", ""]);

  const tabsData: TabsData = {
    Browse: [
      {
        selectedOpt: "Location",
        Options: ["Atlanta", "New York", "Nigeria"],
        h2Val: "Browse Section",
      },
      {
        selectedOpt: "Price Range",
        Options: ["$1000 - $2000", "$2000 - $4000", "$4000+"],
        h2Val: "Browse Section",
      },
      {
        selectedOpt: "Property Type",
        Options: ["Apartment", "Villa", "Studio"],
        h2Val: "Browse Section",
      },
    ],
    Rent: [
      {
        selectedOpt: "City",
        Options: ["Lagos", "Abuja", "Ibadan"],
        h2Val: "Rent Section",
      },
      {
        selectedOpt: "Duration",
        Options: ["Monthly", "Yearly"],
        h2Val: "Rent Section",
      },
      {
        selectedOpt: "Budget",
        Options: ["Low", "Medium", "High"],
        h2Val: "Rent Section",
      },
    ],
    Buy: [
      {
        selectedOpt: "State",
        Options: ["Texas", "California", "Florida"],
        h2Val: "Buy Section",
      },
      {
        selectedOpt: "Price",
        Options: ["$100k - $200k", "$200k - $400k", "$400k+"],
        h2Val: "Buy Section",
      },
      {
        selectedOpt: "Type",
        Options: ["House", "Land", "Condo"],
        h2Val: "Buy Section",
      },
    ],
  };

  return (
    <section className="w-full h-fit flex justify-center items-center">
      <div className="sec1 w-[90%] h-full flex flex-col justify-between p-2 rounded">
        {/* Heading */}
        <div className="flex w-full h-fit justify-center items-center sm:py-[8%] py-[17%] flex-col gap-y-1">
          <h2 className="font-semibold text-white text-2xl sm:text-3xl max-w-[400px] [text-shadow:1px_1px_2px_#000] text-center">
            Rent, Sell, & Find Your Next Home, Stress Free
          </h2>
          <p className="text-white text-[14px] sm:text-[16px] max-w-[440px] [text-shadow:1px_1px_2px_#000] text-center">
            Connecting landlords and tenants directly, list your property or
            find your next home in minutes.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex w-full h-fit justify-center items-start flex-col">
          <div className="bg-white w-full sm:w-fit rounded-t flex border-b border-black/30">
            {(["Browse", "Rent", "Buy"] as const).map((tab) => (
              <h2
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setValues(["", "", ""]);
                }}
                className={`py-3 px-6 text-[13px] sm:text-[16px] font-semibold cursor-pointer transition-all duration-200 ${
                  activeTab === tab
                    ? "text-red-600 border-b-2 border-red-600"
                    : "text-black"
                }`}
              >
                {tab}
              </h2>
            ))}
          </div>

          {/* Dropdown Cards */}
          <div className="bg-white w-full sm:w-fit rounded-b rounded-tr flex flex-col gap-y-7 sm:flex-row gap-x-7 p-4 transition-all duration-300">
            {tabsData[activeTab].map((card, index) => (
              <span
                key={index}
                className="flex sm:justify-center sm:items-center gap-x-7"
              >
                <div>
                  <select
                    className="bg-white outline-none pr-3 backdrop-blur-2xl rounded py-1"
                    value={values[index]}
                    onChange={(e) => {
                      const newValues = [...values];
                      newValues[index] = e.target.value;
                      setValues(newValues);
                    }}
                  >
                    <option value="" disabled className="text-black/30 text-sm">
                      {card.selectedOpt}
                    </option>
                    {card.Options.map((opt, i) => (
                      <option
                        key={i}
                        value={opt}
                        className="text-sm text-gray-600"
                      >
                        {opt}
                      </option>
                    ))}
                  </select>

                  <h2 className="pl-1 text-sm text-black/90 mt-1">
                    {values[index] ? values[index] : card.h2Val}
                  </h2>
                </div>

                {index !== tabsData[activeTab].length - 1 && (
                  <hr className="h-[50%] border border-black/50" />
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
