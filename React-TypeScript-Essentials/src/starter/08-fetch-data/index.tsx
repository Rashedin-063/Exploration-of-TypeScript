import { fetchTours } from "./types";
import { useQuery } from '@tanstack/react-query'


function Component() { 

  const {isPending, isError, error, data: tours } = useQuery({
    queryKey: ['tours'],
    queryFn: fetchTours,

  })

  if (isPending) return <h2>Loading...</h2>
  if (isError) return <h2>Error: {error.message}</h2>
  
  return (
    <div>
      <h2>Tours</h2>
      {tours.map(tour => {
        return <div key={tour.id}>
          <h5 className="mb-1">{tour.name}</h5>
      
        </div>
      })}
    </div>
  )

}

export default Component;