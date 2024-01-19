import { Skeleton } from "@/components/ui/skeleton"

function LoadingResults() {
  return (
    <section>
        <div className="max-w-7xl mx-auto">
            <p className="text-center animate-pulse font-bold text-[#013B94] pt-10">
                Sit tight - we are jusr scanning the market for the best deals!
            </p>
        </div>

        <div className="flex justify-center py-10">
            <div className="w-10 h-10 text-[#013B94] rounded-full animate-bounce"></div>
        </div>
    </section>
  )
}

export default LoadingResults