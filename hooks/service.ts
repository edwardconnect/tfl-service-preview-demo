import { useQuery, UseQueryResult } from "react-query";
import ITflServiceStatus from '../models/ITflServiceStatus';
import ITflBikePoint from '../models/ITflBikePoint';

async function fetchClient<T = UseQueryResult>(endpoint: string) {
  const res = await fetch(endpoint)
  return await res.json() as T
}

export const useFetchTlfServiceStatuses = () => useQuery(
  ['tflServiceStatuses'],
  () => fetchClient<ITflServiceStatus[]>('https://api.tfl.gov.uk/Line/Mode/tube,overground,dlr/Status?detail=true')
)

export const useFetchBikePoints = (queryStr: string) => useQuery(
  ['tflBikePoints', queryStr],
  () => fetchClient<ITflBikePoint[]>(`https://api.tfl.gov.uk/BikePoint/Search?query=${queryStr}`),
  {
    enabled: false,
  }
)
