import { useMemo } from "react"
import ITflServiceStatus from "../models/ITflServiceStatus"
import { useFetchTlfServiceStatuses } from "./service"

type TflServiceStatusUIData = ITflServiceStatus & { isOperateNight?: boolean; hasDisruption?: boolean; }

export const useTlfServiceStatusesData = () => {
  const { data } = useFetchTlfServiceStatuses()

  return useMemo(() => {
    if (!data) {
      return null
    }

    const modes: { [key: string]: TflServiceStatusUIData[] } = {}
    const serviceEntities: { [key: string]: TflServiceStatusUIData } = {}

    data.forEach((it) => {
      if (!modes[it.modeName]) {
        modes[it.modeName] = []
      }

      const uiData = {
        ...it,
        isOperateNight: !!(it.serviceTypes && it.serviceTypes.find(it => it.name === 'Night')),
        hasDisruption: !!(it.lineStatuses && it.lineStatuses.find(it => it.statusSeverity !== 10))
      }

      modes[it.modeName].push(uiData)
      serviceEntities[uiData.id] = uiData
    })

    for (const key in modes) {
      modes[key] = modes[key].sort((a, b) => a.name.localeCompare(b.name))
    }

    return {
      ids: Object.keys(modes),
      entities: modes,
      serviceEntities,
    }
  }, [data])
}