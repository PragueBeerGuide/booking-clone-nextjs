import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";

import { BedDoubleIcon } from "lucide-react";

function LocationPicker({control}:any) {
  return (
    <div className="grid w-full lg:max-w-sm items-center gap-1.5">
          <FormField
            control={control}
            name="location"
            render={({ field }) => (
              <FormItem>

                <FormMessage />

                <FormControl>
                  <div className="relative w-full lg:w-[300px] flex justify-start items-center text-left font-normal">
                    <BedDoubleIcon className="h-4 w-4 absolute left-4" />
                    <Input className="pl-10 placeholder:text-black focus:placeholder:opacity-50" placeholder="Where are you going?" {...field} />
                  </div>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
  )
}

export default LocationPicker