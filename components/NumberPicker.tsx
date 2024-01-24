import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid"

type NumberPickerProps = {
  title: string
  defaultValue?: number
  min?: number
  max?: number
}

function NumberPicker({title, defaultValue = 0, min, max}: NumberPickerProps) {
  const [value, setValue] = useState(defaultValue);

  const handleIncrement = () => {
      setValue(value + 1);
  };

  const handleDecrement = () => {
      setValue(value - 1);
  };

  return (
    <div className='grid grid-cols-2 justify-between items-center'>
      <div className='font-semibold'>{title}</div>
      <div className='grid grid-cols-3 border border-black rounded-sm gap-5 py-2 px-4'>
        <button 
          onClick={handleDecrement} 
          disabled={value === min}
          className={(value === min) ? ('text-gray-400 cursor-not-allowed') : ('text-gray-700 cursor-pointer')}
        >
          <MinusIcon className="h-5 w-5"/>
        </button>

        <span className="text-center">
          {value}
        </span>

        <button 
          onClick={handleIncrement} 
          disabled={value === max}
          className={(value === max) ? ('text-gray-400 cursor-not-allowed') : ('text-blue-600 cursor-pointer')}
        >
          <PlusIcon className="h-5 w-5"/>
        </button>
      </div>
    </div>
  )
}

export default NumberPicker