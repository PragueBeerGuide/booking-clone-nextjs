import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";

// TODO: fix the Type of props
function GuestsPicker({control}:any) {
  return (
    <div className="flex w-full items-center gap-1">
      <div className="grid items-center flex-1">
        <FormField
          control={control}
          name="adults"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormMessage />
              <FormControl>
                <div className="relative w-full lg:w-[130px] flex justify-start items-center text-left font-normal">
                  <span className="absolute left-4">Adults</span>
                  <Input 
                  type="number" 
                  className="pl-20"
                  {...field} />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <div className="grid items-center flex-1">
        <FormField
          control={control}
          name="children"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormMessage />
              <FormControl>
              <div className="relative w-full lg:w-[130px] flex justify-start items-center text-left font-normal">
                  <span className="absolute left-4">Children</span>
                  <Input 
                  type="number" 
                  className="pl-20"
                  {...field} />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    
      <div className="grid items-center flex-1">
        <FormField
          control={control}
          name="rooms"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormMessage />
              <FormControl>
              <div className="relative w-full lg:w-[130px] flex justify-start items-center text-left font-normal">
                  <span className="absolute left-4">Rooms</span>
                  <Input 
                  type="number" 
                  className="pl-20"
                  {...field} />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </div>   
    </div>
  )
}

export default GuestsPicker