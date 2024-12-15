import { DatePicker, Select } from "antd";
import React, { useState } from "react";
import Chart from "../../components/Chart";
import {
  IconActiveUsers,
  IconIncreasingData,
  IconRevenues,
  IconTransactions,
} from "../../assets/icons/Icons";
const { RangePicker } = DatePicker;
function Dashboard() {
  const [staticsFilter, setStaticsFilter] = useState("revenues");
  const [filteredStatics, setFilteredStatics] = useState();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setFilteredStatics(value);
  };

  const handleRevenueChange = (value) => {
    setStaticsFilter(value);
  };

  const onPanelChange = (value, mode) => {
    console.log(value.format("YYYY-MM-DD"), mode);
  };

  return (
    <>
      <div className="p-6 bg-white rounded-2xl">
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
                onChange={handleChange}
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
            <div dangerouslySetInnerHTML={{ __html: IconActiveUsers }} />
            <div className="flex flex-row items-end gap-2 mt-2">
              <h1 className="text-title text-4xl font-work font-bold">37k</h1>
              <div dangerouslySetInnerHTML={{ __html: IconIncreasingData }} />
            </div>
            <div className="my-2">
              <h3 className="text-title text-sm font-work font-semibold">
                Active Users
              </h3>
              <p className="text-gray100 text-sm font-work font-normal">
                0.5k increase than last 7 days
              </p>
            </div>
          </div>
          <div className="flex-1 border border-gray200 rounded-2xl p-4">
            <div dangerouslySetInnerHTML={{ __html: IconTransactions }} />
            <div className="flex flex-row items-end gap-2 mt-2">
              <h1 className="text-title text-4xl font-work font-bold">0.5k</h1>
              <div dangerouslySetInnerHTML={{ __html: IconIncreasingData }} />
            </div>
            <div className="my-2">
              <h3 className="text-black text-sm font-work font-semibold">
                Transactions
              </h3>
              <p className="text-gray100 text-sm font-work font-normal">
                35k increase than last 7 days
              </p>
            </div>
          </div>
          <div className="flex-1 border border-gray200 rounded-2xl p-4">
            <div dangerouslySetInnerHTML={{ __html: IconRevenues }} />

            <div className="flex flex-row items-end gap-2 mt-2">
              <h1 className="text-title text-4xl font-work font-bold">$148k</h1>
              <div dangerouslySetInnerHTML={{ __html: IconIncreasingData }} />
            </div>
            <div className="my-2">
              <h3 className="text-black text-sm font-work font-semibold">
                Revenue
              </h3>
              <p className="text-gray100 text-sm font-work font-normal">
                39k Increased that last 7 days
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 p-6 bg-white rounded-2xl">
        <div className="flex flex-row items-center justify-between">
          <div>
            <h1 className="text-gray100 capitalize text-lg font-semibold font-work">
              Statics Analytics
            </h1>
          </div>
          <div>
            <Select
              defaultValue="weekly"
              className="mb-2"
              style={{
                width: 120,
              }}
              value={staticsFilter}
              onChange={handleRevenueChange}
              options={[
                {
                  value: "revenues",
                  label: "Revenues",
                },
                {
                  value: "activeUsers",
                  label: "Active Users",
                },
              ]}
            />
          </div>
        </div>

        <div className="mt-4">
          <Chart />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
