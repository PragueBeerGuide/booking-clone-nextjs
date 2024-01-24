import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "@/components/ui/button";

import { UserRoundIcon } from "lucide-react";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import NumberPicker from "./NumberPicker";

// TODO: fix the Type of props
function GuestsPickerNew({control}:any) {
  return (
    <div className="grid w-full lg:max-w-sm flex-1 items-center md:items-stretch gap-1.5">
      <FormField
        control={control}
        name="guests"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormMessage />

            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    id="guests"
                    name="guests"
                    variant={"outline"}
                    className="w-full h-full lg:w-[300px] justify-start text-left font-normal hover:border-red-600"
                  >
                    <UserRoundIcon className="mr-3 h-4 w-4" />
                    <span>Adults</span>
                    <span>Children</span>
                    <span>Rooms</span>
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
                      defaultValue={1}
                      min={1}
                      max={30}
                    />
                    <NumberPicker
                      title="Children"
                      defaultValue={0}
                      min={0}
                      max={10}
                    />
                    <NumberPicker
                      title="Rooms"
                      defaultValue={0}
                      min={0}
                      max={30}
                    />
                  </div>

                  <div>
                    <Button 
                      variant="outline" 
                      className="text-blue-600 border-blue-600 w-full hover:text-blue-600 hover:bg-blue-600/10">
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