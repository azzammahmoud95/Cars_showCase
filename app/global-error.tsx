'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="bg-red-600 z-40">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset() } className="p-5 bg-blue-500 text-white"  >Try again</button>
    </div>
  )
}