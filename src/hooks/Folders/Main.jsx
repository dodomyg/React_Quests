import React, { useState } from "react";
import jsonData from "./data.json";
import { FaFolderPlus } from "react-icons/fa";
import { FaFileCirclePlus } from "react-icons/fa6";
import Child from "./Child";

const Main = () => {
  const [data, setData] = useState(jsonData);

  const [file, setFile] = useState({});
  const [folder, setFolder] = useState({});

  const step = 0

  return (
    <div className="m-5 p-2">
      <div className="flex items-center gap-2 mb-3">
        <button>
          <FaFolderPlus />
        </button>
        <button>
          <FaFileCirclePlus />
        </button>
      </div>
      <div className="w-full cursor-pointer">
        {jsonData?.length > 0 &&
          jsonData?.map((i) => (
            <div key={i?.name}>
              {
                <div className="flex items-center gap-2">
                  <Child file={file} folder={folder} setFile={setFile} setFolder={setFolder} setData={setData} step={step} child={i} />
                </div>
              }
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
