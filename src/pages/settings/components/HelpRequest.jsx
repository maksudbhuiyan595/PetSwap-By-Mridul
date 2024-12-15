import React, { useState } from "react";
import { IconTrash, IconView } from "../../../assets/icons/Icons";
import { Modal } from "antd";

function HelpRequest() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  return (
    <div>
      <table className="table-auto w-full">
        <thead className="bg-gray90 rounded-xl">
          <tr className="h-12">
            <th className="text-left pl-4 text-gray300 text-xs font-work font-medium">
              Name
            </th>
            <th className="text-left text-gray300 text-xs font-work font-medium">
              Email
            </th>
            <th className="text-left text-gray300 text-xs font-work font-medium">
              Subject
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
              <td>About privacy policy system</td>
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
                      setViewModal(true);
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
          Delete Request
        </h1>
        <p className="text-gray100 text-sm font-work mt-1 font-normal text-center">
          If you delete the request, it will be permanently removed from your
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

      <Modal open={viewModal} onCancel={() => setViewModal(false)}>
        <h1 className="text-primary text-xl font-work font-semibold">
          Request Details
        </h1>

        <div className="mt-4 flex flex-col gap-y-4">
          <div>
            <h1 className="text-title text-base font-work font-semibold">
              Subject
            </h1>
            <h1 className="text-title text-base font-work font-normal">
              About privacy policy system
            </h1>
          </div>
          <div>
            <h1 className="text-title text-base font-work font-semibold">
              Description
            </h1>
            <h1 className="text-title text-base font-work font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              corrupti non repudiandae fugiat sed in modi deleniti nobis,
              impedit vitae illo necessitatibus?
            </h1>
          </div>
          <div className="flex flex-row px-4 bg-white items-center border border-90 rounded-2xl">
    
            <input
              type="text"
              placeholder="Answer"
              className={`focus:outline-none p-4 w-full`}
            />
          </div>
          <button className="rounded-xl py-3 mt-2 cursor-pointer text-center font-work bg-primary text-white text-sm font-bold w-full" onClick={() => setViewModal(false)}>
            Sand
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default HelpRequest;
