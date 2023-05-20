import React, { useCallback } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import "./style.css";

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

function Editer() {
  const wrapperRef = useCallback((wrapper) => {
    if (wrapper == null) return;

    wrapper.innerHTML = "";
    const editer = document.createElement("div");
    wrapper.append(editer);
    new Quill(editer, { theme: "snow", modules: { toolbar: TOOLBAR_OPTIONS } });
  }, []);
  return <div className="container" ref={wrapperRef}></div>;
}

export default Editer;
