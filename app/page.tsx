import Image from "next/image";
import { trending_data } from "../data/trending";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <main className='bg-[#013B94]'>
      <section className='max-w-7xl mx-auto p-5 pt-8'>
        <h2 className='text-white text-5xl font-bold'>Find your Next Stay</h2>
        <h3 className='text-white text-xl py-5'>
          Search for low prices on hotels, homes and much more...
        </h3>
      </section>

      {/* SearchForm */}
      <section className='m-3 mt-0 -mb-[20px] px-2 lg:px-4'>
        <SearchForm />
      </section>

      <section className='bg-white py-6'>
        <div className='mx-auto max-w-7xl mt-6 p-6 bg-white rounded-lg border shadow-lggit'>
          <div className='pt-4'>
            <h3 className='text-xl font-bold'>Trending destinations</h3>
            <p className='font-light'>
              Most popular choices for travellers from all around the world
            </p>
          </div>

          <div className='flex space-x-4 py-5 overflow-x-scroll'>
            {trending_data.map((item) => (
              <div key={item.id} className='space-y-1 shrink-0 cursor-pointer'>
                <div className='relative w-80 h-72 object-cover rounded-t-lg pb-2'>
                  <Image src={item.src} alt='' fill />
                </div>
                <p className='font-bold'>{item.title}</p>
                <p>{item.location}</p>
                <p className='font-light text-sm'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
