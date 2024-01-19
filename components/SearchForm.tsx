"use client"

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export const formSchema = z.object({
  location: z.string().min(2).max(50),
  dates: z.object({
    from: z.date(),
      to: z.date(),
  }),
  adults: z.string().min(1, {message: "Please select at least 1 adult"}).max(12, {message: "Max 12 adults occupancy"}),
  children: z.string().min(0).max(12, {message: "Max 12 children occupancy"}),
  rooms: z.string().min(1, {message: "Please select at least 1 room"}),
})

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
      adults: "1",
      children: "0",
      rooms: "1",
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

  }

  return (
    <div>SearchForm</div>
  )
}

export default SearchForm