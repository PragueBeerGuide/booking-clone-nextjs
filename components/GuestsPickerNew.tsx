'use client'

import React, { useState } from 'react';
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "@/components/ui/button";

import { UserRoundIcon, DotIcon, ChevronDownIcon } from "lucide-react";

import NumberPicker from "./NumberPicker";

export type GuestsData = {
  name : string, 
  value : number
}


// TODO: fix the Type of props
function GuestsPickerNew({control}:any) {

  const [guestPickerOpen, setGuestPickerOpen] = useState(false);
  const [guests, setGuests] = useState({adults: 1, children: 0, rooms: 1});

  const handleChange = (guestsData: GuestsData) => {
    setGuests({ ...guests, [guestsData.name]: guestsData.value });
  };

  return (
    <div className="grid w-full lg:max-w-sm flex-1 items-center md:items-stretch gap-1.5">
      <FormField
        control={control}
        name="guests"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormMessage />

            <Popover open={guestPickerOpen} onOpenChange={setGuestPickerOpen}>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    id="guests"
                    name="guests"
                    variant={"outline"}
                    className="w-full h-12 lg:w-[300px] justify-start text-left font-normal hover:border-red-600"
                  >
                    <UserRoundIcon className="mr-3 h-5 w-5" />
                    <div className="flex flex-1 items-center">
                      <span>
                        {guests.adults}
                        {guests.adults === 1 ? " adult" : " adults"}
                      </span>
                      <DotIcon />
                      <span>
                        {guests.children}
                        {guests.children === 1 ? " child" : " children"}
                      </span>
                      <DotIcon />
                      <span>
                        {guests.rooms}
                        {guests.rooms === 1 ? " room" : " rooms"}
                      </span>
                    </div>
                    <ChevronDownIcon className="h-5 w-5 ml-3" />
                  </Button>
                </FormControl>
              </PopoverTrigger>

              <PopoverContent className="w-72">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Guests</h4>
                    <p className="text-sm text-muted-foreground">
                      Choose number of guests and rooms.
                    </p>
                  </div>
                 
                  <div className="grid grid-cols-1 gap-2">
                    <NumberPicker
                      title="Adults"
                      name="adults"
                      min={1}
                      max={30}
                      value={guests.adults}  
                      onInputChange={(value) => handleChange(
                        {name: 'adults', value: value}
                        )}            
                    />
                    <NumberPicker
                      title="Children"
                      name="children"
                      min={0}
                      max={10}  
                      value={guests.children}  
                      onInputChange={(value) => handleChange(
                        {name: 'children', value: value}
                        )}             
                    />
                    <NumberPicker
                      title="Rooms"
                      name="rooms"
                      min={1}
                      max={30}
                      value={guests.rooms}  
                      onInputChange={(value) => handleChange(
                        {name: 'rooms', value: value}
                        )}              
                    />
                  </div>

                  <div>
                    <Button 
                      onClick={() => setGuestPickerOpen(false)}
                      variant="outline" 
                      className="text-blue-600 border-blue-600 w-full hover:text-blue-600 hover:bg-blue-600/10"
                    >
                    Done
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </FormItem>
          )}
        />
    </div>
  )
}

export default GuestsPickerNew