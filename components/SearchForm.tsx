"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
} from "@/components/ui/form";

import LocationPicker from "./LocationPicker";
import DatePicker from "./DatePicker";
import GuestsPicker from "./GuestsPicker";
import GuestsPickerNew from "./GuestsPickerNew";

export const formSchema = z.object({
  location: z.string().min(2, {
    message: "Please type your destination",
  }).max(50, {
    message: "Maximum 50 characters allowed for search",
  }),
  dates: z.object({
    from: z.date({ required_error: "Please select a date for your trip"}),
    to: z.date({ required_error: "Please select a date for your trip"}),
  }),
  guests: z.object({
    adults: z
      .string()
      .min(1)
      .max(30, { message: "Max 30 adults occupancy" }),
    children: z.string().min(0).max(10, {
      message: "Max 10 children occupancy",
    }),
    rooms: z.string().min(1, {
      message: "Please select at least 1 room",
    }).max(30),
  })
});

function SearchForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      dates: {
        from: undefined,
        to: undefined,
      },
      guests: {
        adults: "1",
        children: "0",
        rooms: "1",
      },
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);

    const checkin_monthday = values.dates.from.getDate().toString();
    const checkin_month = (values.dates.from.getMonth() + 1).toString();
    const checkin_year = values.dates.from.getFullYear().toString();
    const checkout_monthday = values.dates.to.getDate().toString();
    const checkout_month = (values.dates.to.getMonth() + 1).toString();
    const checkout_year = values.dates.to.getFullYear().toString();

    const checkin = `${checkin_year}-${checkin_month}-${checkin_monthday}`;
    const checkout = `${checkout_year}-${checkout_month}-${checkout_monthday}`;

    const url = new URL("https://www.booking.com/searchresults.html");
    url.searchParams.set("ss", values.location);
    url.searchParams.set("group_adults", values.guests.adults);
    url.searchParams.set("group_children", values.guests.children);
    url.searchParams.set("no_rooms", values.guests.rooms);
    url.searchParams.set("checkin", checkin);
    url.searchParams.set("checkout", checkout);

    router.push(`/search?url=${url.href}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col lg:flex-row lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg"
      >
        <div className="flex flex-col w-full lg:w-max lg:flex-row bg-orange-300 p-1 gap-1 rounded-lg">
          <LocationPicker 
          control={form.control}
          />
          <DatePicker
          control={form.control}
          />
          <GuestsPickerNew
          control={form.control}
          />

          <div className="flex">
            <Button type="submit" className="text-xl h-12 bg-blue-500 hover:bg-blue-700 grow">
              Search
            </Button>
          </div>
        </div>
         
      </form>
    </Form>

    
  );
}

export default SearchForm;