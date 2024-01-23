import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import NumberPicker from "./NumberPicker"

export default function GuestAndRoomPicker() {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <form className="p-4">
          <div className="flex flex-col">
            <div className="flex flex-col justify-between">
                <div className="flex justify-between">
                    <div>Adults</div>
                    <NumberPicker />
                </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="">
        <Button variant="outline">Done</Button>
      </CardFooter>
    </Card>
  )
}
