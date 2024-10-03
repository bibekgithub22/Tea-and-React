import React from "react";

function BgBtn(props) {
  return (
    <button
      className="bg-slate-600 rounded-3xl px-3 py-[4px] flex-wrap"
      style={{ backgroundColor: props.colorName }}
      onClick={() => props.setColor(props.colorName)}
    >
      {props.colorName}
    </button>
  );
}

export default BgBtn;
