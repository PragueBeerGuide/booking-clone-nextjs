import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  } from "@/components/ui/form";

import { BedDoubleIcon } from "lucide-react";

// TODO: fix the Type of props
function LocationPicker({control}:any) {
  return (
    <div className="grid w-full lg:max-w-sm items-center md:items-stretch gap-1.5">
      <FormField
        control={control}
        name="location"
        render={({ field }) => (
          <FormItem>

            <FormMessage />

            <FormControl>
              <div className="relative w-full h-12 lg:w-[300px] flex justify-start items-center text-left font-normal">
                <BedDoubleIcon className="h-5 w-5 absolute left-4" />
                <Input 
                  className="h-full pl-12 placeholder:text-black hover:border-red-600 focus:placeholder:opacity-50 " 
                  placeholder="Where are you going?" 
                  {...field} 
                />
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  )
}

export default LocationPicker