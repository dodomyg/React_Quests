import { useEffect, useState } from "react";
import { FaFile, FaFolder, FaFolderOpen } from "react-icons/fa6";

const Child = ({ child, step, setData, setCurrentActive, currentActive}) => {
  const [openFolder, setOpenFolder] = useState([]);

  const renderchild = (child, step) => {
    if (child?.children?.length > 0) {
      return child?.children?.map((i) => {
        return <Child currentActive={currentActive} setCurrentActive={setCurrentActive} key={i?.name} step={step + 1} child={i} />;
      });
    }
    return null;
  };


  return (
    <div style={{ marginLeft: `${step * 20}px` }}>
      {child?.isFolder ? (
        <div>
          <div
            onClick={() => {setOpenFolder((prev)=>prev.includes(child?.name) ? prev.filter((i) => i !== child?.name) : [...prev, child?.name])
            setCurrentActive((prev)=>prev === child ? null : child)
            }
            }
            className={`flex items-center gap-2 p-2 ${currentActive?.name === child?.name && "bg-gray-300"}`}
          >
            {openFolder?.length > 0 && openFolder.includes(child?.name) ? (
              <FaFolderOpen />
            ) : (
              <FaFolder />
            )
            }
            {child?.name}
          </div>
          {openFolder?.length > 0 && renderchild(child, step)}
        </div>
      ) : (
        <div className="flex items-center gap-2 p-2">
          <FaFile />
          {child?.name}
        </div>
      )}
    </div>
  );
};

export default Child;
