import React from 'react';

function FilterBtn({ item, child, onClick,style }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick} // Fix the prop name here
        className={`border-solid border-[1px] border-gray-400 rounded-xl px-2 ${child}`}
        style={style}
      >
        {item}
      </button>
    </div>
  );
}

export default FilterBtn;
