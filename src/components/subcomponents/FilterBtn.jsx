import React from 'react';

function FilterBtn({ item, child, onClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={onClick} // Fix the prop name here
        className={`border-solid border-[1px] border-gray-400 rounded-xl px-2 ${child}`}
      >
        {item}
      </button>
    </div>
  );
}

export default FilterBtn;
