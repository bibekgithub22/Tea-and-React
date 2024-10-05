import React from "react";

function BgBtn(props) {
  const BgChange = () => {
    props.set(props.colorName);
  };
  return (
    <button
      className="bg-slate-600 rounded-3xl px-3 py-[4px] flex-wrap"
      style={{ backgroundColor: props.colorName }}
      onClick={BgChange}
    >
      {props.colorName}
    </button>
  );
}

export default BgBtn;
