import React from 'react'
import { useState } from 'react'
import { Button } from "@/components/ui/button"


function NumberPicker() {
    const [value, setValue]=useState(1)
  return (
    <>
        <div className="flex items-center space-x-2">
            <Button 
                variant="ghost"
                onClick={() => setValue(value-1)}
            
            >-</Button>
            <span>{value}</span>
            <Button 
                variant="ghost"
                onClick={() => setValue(value+1)}
                >+</Button>
        </div>
    
    </>
  )
}

export default NumberPicker