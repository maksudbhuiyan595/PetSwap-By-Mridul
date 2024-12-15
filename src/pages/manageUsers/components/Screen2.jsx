import React from "react";
import {
  IconLeftArrow,
  IconProduct,
  IconSells,
} from "../../../assets/icons/Icons";
import { useGlobalContext } from "../../../utils/contextApi/GlobalContext";
import user from "../../../assets/images/user.png";
import Chart from "../../../components/Chart";

function Screen2() {
  const { setActiveScreen } = useGlobalContext();
  return (
    <div className="p-6 bg-white rounded-2xl">
      <div className="flex flex-row items-center justify-between mb-4">
        <div>
          <div
            className="flex flex-row items-center gap-2 cursor-pointer"
            onClick={() => setActiveScreen(0)}
          >
            <div dangerouslySetInnerHTML={{ __html: IconLeftArrow }} />
            <h1 className="text-black text-2xl font-semibold font-work">
              Manage Users
            </h1>
          </div>
          <p className="text-gray-500 text-sm font-work mt-1 font-normal w-full">
            Admin with access to this workspace can promote or demote users to
            maintain business insights.
          </p>
        </div>
      </div>

      <div className="mt-12">
        {/* Product Details */}
        <div className="flex flex-row items-center w-full gap-4 mt-6">
          <div className="flex-1 flex flex-col justify-center gap-2">
            <div className="flex flex-col items-center mb-4 w-full">
              <img
                src={user}
                alt="User Name"
                className="h-20 w-20 rounded-full"
              />
              <h1 className="text-primary text-2xl font-semibold font-work">
                Md Midul Hosen
              </h1>
              <p className="text-title text-sm font-work font-semibold w-full text-center">
                Location: Times Square, USA
              </p>
              <p className="text-title text-sm font-work font-normal w-full text-center">
                hasanmahmud@gmail.com
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-1/2 border border-[#E7E7E7] p-2 rounded-lg">
                <div className="flex flex-row items-center">
                  <div
                    className="bg-[#F6F6F6] p-2 rounded"
                    dangerouslySetInnerHTML={{ __html: IconProduct }}
                  />
                </div>
                <h1 className="text-title text-sm font-semibold mt-2">
                  Products
                </h1>
                <h1 className="text-title text-2xl font-work font-semibold">
                  4,856
                </h1>
              </div>
              <div className="w-1/2 border border-[#E7E7E7] p-2 rounded-lg">
                <div className="flex flex-row items-center">
                  <div
                    className="bg-[#F6F6F6] p-2 rounded"
                    dangerouslySetInnerHTML={{ __html: IconSells }}
                  />
                </div>
                <h1 className="text-title text-sm font-semibold mt-2">Sells</h1>
                <h1 className="text-title text-2xl font-work font-semibold">
                  $4,856
                </h1>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-center">
            <Chart />
          </div>
        </div>

        {/* Products Listing */}

        <div className="mt-6">
          <h1 className="text-title text-2xl font-work font-semibold">
            Products Listing
          </h1>

          <div className="mt-3">
            <table className="table-auto w-full mt-3">
              <thead className="bg-gray90 rounded-xl">
                <tr className="h-12">
                  <th className="text-left pl-4 text-gray300 text-xs font-work font-medium">
                    Product Name
                  </th>
                  <th className="text-left text-gray300 text-xs font-work font-medium">
                    Price
                  </th>
                  <th className="text-left text-gray300 text-xs font-work font-medium">
                    Condition
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)]?.map((_, index) => (
                  <tr
                    className="border-b border-b-[#E9E9EA] py-2 gap-y-2 cursor-pointer"
                    key={index}
                  >
                    <td className="pl-4 flex flex-row items-center gap-2">
                      <div className="py-2">
                        <img
                          src={`https://i.pravatar.cc/150?img=${index}`}
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div>
                        <h1
                          className={`text-title text-sm font-work font-normal`}
                        >
                          User {index}
                        </h1>
                      </div>
                    </td>
                    <td>$2023.00</td>
                    <td>
                      <div className="flex flex-row items-center justify-centergap-2">
                        <h3>{index / 2 === 0 ? "New" : "Used"}</h3>
                      </div>
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

export default Screen2;
