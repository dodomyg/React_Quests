import { useState } from "react";
import OtpInput from "./OtpInput";

const OTP = () => {
  const [phoneNum, setPhoneNum] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const submitPhoneNumber = () => {
    const phoneRegex = /^[0-9]{10}$/;
    try {
      if (!phoneRegex.test(phoneNum)) {
        alert("Please enter a valid phone number");
        return;
      }
      setSubmitted(true);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitt = () => {};
  return (
    <div className="my-3">
      {!submitted ? (
        <>
          <h1 className="text-3xl">Enter Your phone number (10 digit)</h1>
          <input
            className="p-1 m-1"
            placeholder="Enter your phone number"
            type="text"
            value={phoneNum}
            onChange={(e) => setPhoneNum(e.target.value)}
          />
          <button type="button" onClick={submitPhoneNumber}>
            Get OTP
          </button>
        </>
      ) : (
        <>
          <p>OTP sent to phone number {phoneNum}</p>
          <OtpInput length={4} onSubmitt={onSubmitt} />
        </>
      )}
    </div>
  );
};

export default OTP;
