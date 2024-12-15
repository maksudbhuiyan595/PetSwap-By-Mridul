import React, { useState } from "react";
import productImage from "../../assets/images/food.png";
import user from "../../assets/images/user.png";
import { IconEdit, IconTrash } from "../../assets/icons/Icons";
import { Modal, Radio } from "antd";

function ProductListing() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const [userRole, setUserRole] = useState(1);
  const onChangeRole = (e) => {
    console.log("radio checked", e.target.value);
    setUserRole(e.target.value);
  };

  return (
    <div className="p-6 bg-white rounded-2xl">
      <div>
        <div>
          <h1 className="text-black text-2xl font-semibold font-work mb-4">
            Product Listing
          </h1>

          <div>
            <table className="table-auto w-full">
              <thead className="bg-gray90 rounded-xl">
                <tr className="h-12">
                  <th className="text-left pl-4 text-gray300 text-xs font-work font-medium">
                    User Name
                  </th>
                  <th className="text-left text-gray300 text-xs font-work font-medium">
                    Product Name
                  </th>
                  <th className="text-left text-gray300 text-xs font-work font-medium">
                    Price
                  </th>
                  <th className="text-left text-gray300 text-xs font-work font-medium">
                    Condition
                  </th>
                  <th className="text-left text-gray300 text-xs font-work font-medium">
                    Status
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
                          src={user}
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                      <div>
                        <h1
                          className={`text-title text-sm font-work font-normal`}
                        >
                          User {index + 1}
                        </h1>
                      </div>
                    </td>
                    <td>
                      <div className="py-2 flex flex-row items-center gap-2">
                        <img
                          src={productImage}
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                        />
                        <h1
                          className={`text-title text-sm font-work font-normal`}
                        >
                          Dog Food {index + 1}
                        </h1>
                      </div>
                    </td>
                    <td>$245{index}</td>
                    <td>{index / 2 === 0 ? "New" : "Used"}</td>
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
                          ? "Approve"
                          : "Pending"}
                      </button>
                    </td>
                    <td>
                      <div className="flex flex-row items-center gap-6">
                        <div
                          onClick={() => setIsDeleteModalVisible(true)}
                          dangerouslySetInnerHTML={{ __html: IconTrash }}
                        />

                        <div
                          onClick={() => setIsEditModalVisible(true)}
                          dangerouslySetInnerHTML={{ __html: IconEdit }}
                        />
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
            <Modal
              open={isDeleteModalVisible}
              width={"400px"}
              onCancel={() => setIsDeleteModalVisible(false)}
              onOk={() => setIsDeleteModalVisible(false)}
            >
              <h1 className="text-black text-2xl font-semibold font-work text-center mb-3">
                Delete Product
              </h1>
              <p className="text-gray100 text-sm font-work mt-1 font-normal text-center">
                If you delete the product, it will be permanently removed from
                your dashboard
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

            <Modal
              open={isEditModalVisible}
              onCancel={() => setIsEditModalVisible(false)}
              onOk={() => setIsEditModalVisible(false)}
              width={"400px"}
            >
              <h3 className="text-title text-lg font-work font-bold">
                Change user role
              </h3>
              <Radio.Group
                onChange={onChangeRole}
                value={userRole}
                size="large"
                className="mt-2 gap-y-2 flex flex-col"
              >
                <Radio className="block" value={1}>
                  Approved
                </Radio>
                <Radio className="block" value={2}>
                  Cancelled
                </Radio>
              </Radio.Group>
              <button
                className="text-white text-base font-semibold bg-primary w-full py-2 rounded-xl mt-4"
                onClick={() => setIsEditModalVisible(false)}
              >
                Done
              </button>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
