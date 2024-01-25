'use client'

import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid"

type NumberPickerProps = {
  title: string
  name: string
  min?: number
  max?: number
  value: number
  onInputChange: (value:number) => void
}
function NumberPicker({title, min = 0, max, value, onInputChange, ...field}: NumberPickerProps) {

  const handleIncrement = () => {
    onInputChange(value + 1);
  };

  const handleDecrement = () => {
    onInputChange(value - 1);
  };

  return (
    <div className='grid grid-cols-2 justify-between items-center'>
      <div className='font-semibold'>{title}</div>
      <div className='grid grid-cols-3 border border-black rounded-sm gap-5 py-2 px-4'>
        <button 
          onClick={handleDecrement} 
          disabled={value === min}
          className={(value === min) ? ('text-gray-400 cursor-not-allowed') : ('text-blue-600 cursor-pointer')}
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