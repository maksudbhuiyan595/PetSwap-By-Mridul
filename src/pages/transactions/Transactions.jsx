import React, { useState } from "react";
import {
  IconIncreasingData,
  IconPaypal,
  IconRaisingRevenues,
} from "../../assets/icons/Icons";
import { DatePicker, Select } from "antd";
const { RangePicker } = DatePicker;
function Transactions() {
  const [filteredStatics, setFilteredStatics] = useState("weekly");
  const handleChangeStatics = (value) => {
    setFilteredStatics(value);
  };
  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };
  return (
    <div className="p-6 bg-white rounded-2xl">
      <div>
        <div>
          <div className="flex flex-row items-center justify-between">
            <div>
              <h1 className="text-black text-2xl font-semibold font-work">
                Overview
              </h1>
              <p className="text-gray100 text-sm font-work mt-1 font-normal">
                Activities summary at a glance
              </p>
            </div>

            <div>
              <div className="flex flex-row justify-end">
                <Select
                  className="mb-3"
                  defaultValue="weekly"
                  value={filteredStatics}
                  style={{
                    width: 120,
                  }}
                  onChange={handleChangeStatics}
                  options={[
                    {
                      value: "weekly",
                      label: "Weekly",
                    },
                    {
                      value: "monthly",
                      label: "Monthly",
                    },
                    {
                      value: "yearly",
                      label: "Yearly",
                    },
                    {
                      value: "custom",
                      label: "Custom",
                    },
                  ]}
                />
              </div>
              <div>
                {filteredStatics === "custom" && (
                  <RangePicker
                    style={{ width: 300 }}
                    format="YYYY-MM-DD"
                    onPanelChange={onPanelChange}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <div className="flex-1 border border-gray200 rounded-2xl p-4">
              <div dangerouslySetInnerHTML={{ __html: IconPaypal }} />
              <div className="flex flex-row items-end gap-2 mt-2">
                <h1 className="text-title text-4xl font-work font-bold">37k</h1>
                <div dangerouslySetInnerHTML={{ __html: IconIncreasingData }} />
              </div>
              <div className="my-2">
                <h3 className="text-title text-sm font-work font-semibold">
                  Transactions
                </h3>
                <p className="text-gray100 text-sm font-work font-normal">
                  39k Increased that last 7 days
                </p>
              </div>
            </div>
            <div className="flex-1 border border-gray200 rounded-2xl p-4">
              <div dangerouslySetInnerHTML={{ __html: IconRaisingRevenues }} />
              <div className="flex flex-row items-end gap-2 mt-2">
                <h1 className="text-title text-4xl font-work font-bold">24k</h1>
                <div dangerouslySetInnerHTML={{ __html: IconIncreasingData }} />
              </div>
              <div className="my-2">
                <h3 className="text-black text-sm font-work font-semibold">
                  Revenues
                </h3>
                <p className="text-gray100 text-sm font-work font-normal">
                  1.5k Increased than last 7 days
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-black text-2xl font-semibold font-work mb-1">
            Transactions
          </h1>
          <p className="text-sm text-gray70 mb-4">
            Overall details of transactions
          </p>
          <div>
            <table className="table-auto w-full">
              <thead className="bg-gray90 rounded-xl">
                <tr className="h-12">
                  <th className="text-left pl-4 text-gray300 text-xs font-work font-medium">
                    Date
                  </th>
                  <th className="text-left text-gray300 text-xs font-work font-medium">
                    Name
                  </th>
                  <th className="text-left text-gray300 text-xs font-work font-medium">
                    Purchased Product
                  </th>
                  <th className="text-left text-gray300 text-xs font-work font-medium">
                    Amount
                  </th>
                  <th className="text-left text-gray300 text-xs font-work font-medium">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)]?.map((_, index) => (
                  <tr
                    className="border-b border-b-[#E9E9EA] py-2 gap-y-2 cursor-pointer"
                    key={index}
                  >
                    <td className="pl-4 flex flex-row items-center gap-2 py-4">
                      <h1
                        className={`text-title text-sm font-work font-normal`}
                      >
                        02 Feb, 2024
                      </h1>
                    </td>
                    <td>
                      <h1
                        className={`text-title text-sm font-work font-normal`}
                      >
                        User {index + 1}
                      </h1>
                    </td>
                    <td>iMac air 2017</td>
                    <td>$245{index}</td>
                    <td>
                      <button
                        className={`${
                          index === 1
                            ? "bg-[#ffe9e9]"
                            : index === 4
                            ? "bg-[#dff8e1]"
                            : "bg-[#f3f0f0]"
                        } px-2 py-1 rounded-xl`}
                      >
                        {index === 1
                          ? "Cancel"
                          : index === 4
                          ? "Completed"
                          : "Pending"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className={`mt-8 flex-row flex items-center justify-between`}>
              <div>
                <h1 className={`text-black text-sm font-nunito font-bold`}>
                  page 1 of 10
                </h1>
              </div>
              <div className="flex flex-row items-center gap-3">
                <button
                  className={`border border-gray100 rounded-xl px-4 py-2 cursor-pointer`}
                >
                  Previous
                </button>
                <button
                  className={`border border-gray100 rounded-xl px-4 py-2 cursor-pointer`}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transactions;
