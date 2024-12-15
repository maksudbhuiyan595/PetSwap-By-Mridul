import React, { useState } from "react";
import { useGlobalContext } from "../../../utils/contextApi/GlobalContext";
import { SearchOutlined } from "@ant-design/icons";
import { IconTrash, IconView } from "../../../assets/icons/Icons";
import { Modal } from "antd";

function Screen1() {
  const { setActiveScreen } = useGlobalContext();
  const [setSearchText] = useState("");
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  return (
    <div className="p-6 bg-white rounded-2xl">
      <div className="flex flex-row items-center justify-between mb-4">
        <div>
          <h1 className="text-black text-2xl font-semibold font-work">
            Manage Users
          </h1>
          <p className="text-gray100 text-sm font-work mt-1 font-normal">
            Admin with access to this workspace can promote or demote user
            maintain business insights
          </p>
        </div>
      </div>

      <div
        className={`border border-90 px-4 mb-6 py-4 rounded-xl flex flex-row items-center gap-2`}
      >
        <SearchOutlined color="#24272B" />
        <input
          type="text"
          name=""
          id=""
          className=" focus:outline-none w-full"
          placeholder="Search user by their name or email..."
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <table className="table-auto w-full">
        <thead className="bg-gray90 rounded-xl">
          <tr className="h-12">
            <th className="text-left pl-4 text-gray300 text-xs font-work font-medium">
              User
            </th>
            <th className="text-left text-gray300 text-xs font-work font-medium">
              Role
            </th>
            <th className="text-left text-gray300 text-xs font-work font-medium">
              Action
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
                  <h1 className={`text-title text-sm font-work font-normal`}>
                    User {index}
                  </h1>
                  <h1
                    className={`text-[#475467] text-sm font-work font-normal`}
                  >
                    user@{index}.com
                  </h1>
                </div>
              </td>
              <td>user@{index}.com</td>
              <td>
                <div className="flex flex-row items-center justify-centergap-2">
                  <div
                    className="cursor-pointer px-2"
                    onClick={() => setIsDeleteModalVisible(true)}
                    dangerouslySetInnerHTML={{ __html: IconTrash }}
                  />
                  <div
                    className="cursor-pointer px-2"
                    onClick={() => {
                      setActiveScreen(1);
                    }}
                    dangerouslySetInnerHTML={{ __html: IconView }}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        open={isDeleteModalVisible}
        width={"400px"}
        onCancel={() => setIsDeleteModalVisible(false)}
        onOk={() => setIsDeleteModalVisible(false)}
      >
        <h1 className="text-black text-2xl font-semibold font-work text-center">
          Delete User
        </h1>
        <p className="text-gray100 text-sm font-work mt-1 font-normal text-center">
          If you delete the user, it will be permanently removed from your
          dashboard
        </p>

        <div className="mt-4 flex flex-row items-center justify-between">
          <button
            className="text-danger text-base font-semibold px-4 py-2 rounded-xl"
            onClick={() => setIsDeleteModalVisible(false)}
          >
            Delete
          </button>
          <button
            className="text-white text-base font-semibold bg-primary px-4 py-2 rounded-xl"
            onClick={() => setIsDeleteModalVisible(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>

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
  );
}

export default Screen1;
