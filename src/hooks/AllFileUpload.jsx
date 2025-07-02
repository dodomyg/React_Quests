import React, { useRef, useState } from "react";

const AllFileUpload = () => {
  const [upload, setUpload] = useState(null);
  const fileRef = useRef(null);
  console.log(upload, "upload");
  return (
    <div className="m-3">
      <div
        onClick={() => fileRef?.current?.click()}
        className="border-2 border-black w-[200px] h-[100px] bg-blue-gray-200 flex items-center justify-center border-dotted cursor-pointer"
      >
        <input
          ref={fileRef}
          className="hidden"
          accept=""
          placeholder="Upload File"
          type="file"
          onChange={(e) => {
            setUpload(e.target.files[0]);
          }}
        />
        {!upload ? (
          <p>Upload File</p>
        ) : (
          <i className="text-sm">{upload?.name}</i>
        )}
      </div>
    </div>
  );
};

export default AllFileUpload;
