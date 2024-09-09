import React, { useEffect, useRef, useState } from "react";

const OtpInput = ({ onSubmitt, length }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[0]) {
      inputRef.current[0].focus();
    }
  }, []);

  const handleChange = (index, e) => {
    const val = e.target.value;
    if (/^\d$/.test(val)) {
      // Allow only numeric values
      const newOtp = [...otp];
      newOtp[index] = val;
      setOtp(newOtp);
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    }
  };

  const handleClick = (e, i) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[i] = ""; // Clear the current input
      setOtp(newOtp);
      if (i > 0) {
        inputRef.current[i - 1].focus(); // Focus the previous input only if not the first
      }
    } else if (e.key === "ArrowRight" && i < length - 1) {
      inputRef.current[i + 1].focus();
    } else if (e.key === "ArrowLeft" && i > 0) {
      inputRef.current[i - 1].focus();
    }
  };

  const handleSubmit = () => {
    const otpValue = otp.join("");
    onSubmitt(otpValue);
  };

  return (
    <div className="flex w-fit items-center gap-1">
      {otp.map((val, i) => (
        <input
          key={i}
          value={val}
          onChange={(e) => handleChange(i, e)}
          className="border border-black w-12 h-12 text-center"
          type="text"
          maxLength={1}
          onKeyDown={(e) => handleClick(e, i)}
          ref={(el) => (inputRef.current[i] = el)} // Assign ref dynamically
        />
      ))}
      <button
        onClick={handleSubmit}
        className="ml-4 p-2 bg-blue-500 text-white"
      >
        Submit
      </button>
    </div>
  );
};

export default OtpInput;
