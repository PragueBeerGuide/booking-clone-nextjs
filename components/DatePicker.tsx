import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";

import { CalendarIcon } from "lucide-react";

function DatePicker({control}:any) {
  return (
    <div className="grid w-full lg:max-w-sm flex-1 items-center gap-1.5">
      <FormField
        control={control}
        name="dates"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormMessage />

            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    id="date"
                    name="dates"
                    variant={"outline"}
                    className="w-full lg:w-[300px] justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-3 h-4 w-4" />
                    {field.value?.from ? (
                      field.value?.to ? (
                        <>
                          {format(field.value?.from, "LLL dd, y")}
                          <span className="px-2">—</span>
                          {format(field.value?.to, "LLL dd, y")}
                        </>
                      ) : (
                        <>
                          {format(field.value?.from, "LLL dd, y")}
                          <span className="px-2">—</span>
                          <span>Check-out date</span>
                        </>
                      )
                    ) : (
                      <div> 
                        <span>Check-in date</span>
                        <span className="px-2">—</span>
                        <span>Check-out date</span>
                      </div>
                    )}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  selected={field.value}
                  defaultMonth={field.value.from}
                  onSelect={field.onChange}
                  numberOfMonths={2}
                  disabled={(date) =>
                    date < new Date(new Date().setHours(0, 0, 0, 0))
                  }
                />
              </PopoverContent>
            </Popover>
          </FormItem>
          )}
        />
    </div>
  )
}

export default DatePicker