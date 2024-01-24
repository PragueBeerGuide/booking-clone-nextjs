'use client'

import React, { useState } from 'react';
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid"

type NumberPickerProps = {
  title: string
  name: string
  value: number
  defaultValue?: number
  min?: number
  max?: number
  sendDataToParent: (guestsData: GuestsData) => void
}

export type GuestsData = {
  name : string, 
  value : number
}

function NumberPicker({title, name, defaultValue = 0, min = 0, max, sendDataToParent}: NumberPickerProps) {
  const [value, setValue] = useState(defaultValue);

  const handleIncrement = () => {
      setValue(value + 1);
      handleGuests()
  };

  const handleDecrement = () => {
      setValue(value - 1);
      handleGuests()
  };

  const handleGuests = () => {
    sendDataToParent({name: name, value: value})
  }

  console.log(name + ":", value)

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