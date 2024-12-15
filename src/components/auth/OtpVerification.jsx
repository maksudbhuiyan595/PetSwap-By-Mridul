import React from "react";
import { Flex, Input } from "antd";
import { useNavigate } from "react-router-dom";

function OtpVerification() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/new-password");
  };

  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const sharedProps = {
    onChange,
  };

  return (
    <div className="h-screen flex flex-col items-center bg-[#f6f6f6] justify-center">
      <div className="container mx-auto flex flex-row items-start justify-center">
        <div className="bg-white rounded-2xl p-8 w-[50%]">
          <h1 className="text-title mb-2 text-2xl font-work font-semibold">
            OTP Verification
          </h1>
          <p className={`text-subtitle text-base font-work font-normal`}>
            We just sent a verification code to <br />
            <b>midul@gmail.com</b>
          </p>

          <form onSubmit={handleSubmit} className={`mt-4`}>
            <Flex gap="middle" align="flex-start" vertical>
              <h4 className="text-title text-base font-work font-bold">
                Enter the code
              </h4>
              <Input.OTP
                size="large"
                formatter={(str) => str.toUpperCase()}
                {...sharedProps}
              />
            </Flex>
            <button
              type="submit"
              className="bg-primary text-white p-4 rounded-2xl mt-4 w-full"
            >
              Continue
            </button>
            <p className="text-black mt-4 text-sm font-work font-normal text-center">
              Didn’t get OPT?{" "}
              <span className="text-primary cursor-pointer">Send Again</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OtpVerification;
