import React, { useEffect, useState } from "react";
import jsonData from "./data.json";
import { FaFolderPlus } from "react-icons/fa";
import { FaFileCirclePlus } from "react-icons/fa6";
import Child from "./Child";

const Main = () => {
  const [data, setData] = useState(jsonData);

  const [currentActive, setCurrentActive] = useState(null);

  const addToFolder = (tree, target, newItem) => {
    return tree.map((node) => {
      if (node.name === target.name && node.isFolder) {
        return {
          ...node,
          children: [...(node.children || []), newItem],
        };
      }

      if (node.isFolder && node.children) {
        return {
          ...node,
          children: addToFolder(node.children, target, newItem),
        };
      }

      return node;
    });
  };

  const step = 0;

  return (
    <div className="m-5 p-2">
      <div className="flex items-center gap-2 mb-3">
        <button
          onClick={() => {
            const folderName = window.prompt("Enter a Folder Name to create");
            if (!folderName) return;

            const newFolder = {
              name: folderName,
              isFolder: true,
              children: [],
            };

            if (!currentActive) {
              setData((prev) => [...prev, newFolder]);
            } else {
              setData((prev) => addToFolder(prev, currentActive, newFolder));
            }
          }}
        >
          <FaFolderPlus />
        </button>
        <button
          onClick={() => {
            const fileName = window.prompt("Enter a file name to create");
            if (!fileName) return;

            const newFile = { name: fileName, isFolder: false };

            if (!currentActive) {
              setData((prev) => [...prev, newFile]);
            } else {
              setData((prev) => addToFolder(prev, currentActive, newFile));
            }
          }}
        >
          <FaFileCirclePlus />
        </button>
      </div>
      <div className="w-full cursor-pointer">
        {data?.length > 0 &&
          data?.map((i) => (
            <div key={i?.name}>
              {
                <div className="flex items-center gap-2">
                  <Child
                    currentActive={currentActive}
                    setCurrentActive={setCurrentActive}
                    setData={setData}
                    step={step}
                    child={i}
                  />
                </div>
              }
            </div>
          ))}
      </div>
    </div>
  );
};

export default Main;
