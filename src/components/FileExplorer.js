import React, { useEffect, useState } from "react";
import { FcFolder } from "react-icons/fc";
import { FaGreaterThan } from "react-icons/fa";

const FileExplorer = ({ files }) => {
  const [expanded, setExpanded] = useState(false);
  const [filedData, setFileData] = useState([]);

  useEffect(() => {
    setFileData(files);
  }, []);

  const addChildren = () => {
    let newFileData = "";

    if (filedData.type === "folder") {
      newFileData = {
        ...filedData,
        items: [
          ...filedData.items,
          { name: "file", id: new Date(), type: "file" },
        ],
      };
    } else {
      newFileData = {
        ...filedData,
        type: "folder",
        items: [{ name: "file", id: new Date(), type: "file" }],
      };
    }
    console.log(newFileData);
    setFileData(newFileData);
    setExpanded(true);
  };
  console.log(filedData, "onclick");
  if (filedData?.type === "file") {
    return (
      <>
        <div className="file-content">
          <div className="file">
            <FcFolder size={25} onClick={() => setExpanded(!expanded)} />
          </div>
          <span>
            <button type="button" onClick={() => addChildren()}>
              +
            </button>
          </span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="folder-content">
        <div className="folder">
          <FaGreaterThan size={10} />{" "}
          <FcFolder size={25} onClick={() => setExpanded(!expanded)} />
          <span>
            <button type="button" onClick={() => addChildren()}>
              +
            </button>
          </span>
        </div>

        {expanded &&
          filedData?.items.map((item, index) => (
            <FileExplorer index={index} files={item} />
          ))}
      </div>
    </>
  );
};
export default FileExplorer;
