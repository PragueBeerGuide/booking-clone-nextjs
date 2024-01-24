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
    <div className="flex w-full items-center space-x-2">
      <div className="grid items-center flex-1">
        <FormField
          control={control}
          name="adults"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-white">Adults</FormLabel>
              <FormMessage />
              <FormControl>
                <Input type="number" placeholder="Adults" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="children"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-white">Children</FormLabel>
              <FormMessage />
              <FormControl>
                <Input type="number" placeholder="Children" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
    
        <FormField
          control={control}
          name="rooms"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel className="text-white">Rooms</FormLabel>
              <FormMessage />
              <FormControl>
                <Input type="number" placeholder="rooms" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}

export default GuestsPicker