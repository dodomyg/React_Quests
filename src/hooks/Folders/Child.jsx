import { useEffect, useState } from "react";
import { FaFile, FaFolder } from "react-icons/fa6";

const Child = ({ child, step, setData, file, setFile, setFolder, folder }) => {
  const [openFolder, setOpenFolder] = useState(false);

  const renderchild = (child, step) => {
    if (child?.children?.length > 0) {
      return child?.children?.map((i) => {
        return <Child key={i?.name} step={step + 1} child={i} />;
      });
    }
    return null;
  };

  return (
    <div style={{ marginLeft: `${step * 20}px` }}>
      {child?.isFolder ? (
        <div>
          <div
            onClick={() => setOpenFolder(!openFolder)}
            className="flex items-center gap-2"
          >
            <FaFolder />
            {child?.name}
          </div>
          {openFolder && renderchild(child, step)}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <FaFile />
          {child?.name}
        </div>
      )}
    </div>
  );
};

export default Child;
