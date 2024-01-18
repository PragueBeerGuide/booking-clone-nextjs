'use client'

import Link from "next/link"
import Image from "next/image"
import bookingLogo from "../public/bookingcom.svg"
import ServicesNavigation from "./ServicesNavigation"

import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"



function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-[#013B94]">
      <nav 
        className="flex mx-auto px-6 py-3 lg:px-8 max-w-7xl items-center justify-between"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Booking.com</span>
            <Image
              src={bookingLogo}
              alt="Booking.com logo"
              height={20}
            />
          </Link>
        </div>

        

        <div className="flex sm:hidden">
          <button
            type="button"
            className="text-white justify-center items-center rounded-md inline-flex p-2.5 -m-2.5"
            // Open mobile menu onClick
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>
      </nav>
      <nav>
        <ServicesNavigation />
      </nav>
    </header>
  )
}

export default Header