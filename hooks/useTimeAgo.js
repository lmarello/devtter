import { useState, useEffect } from "react"
import { DEFAULT_LANGUAGE } from "constants/locale"

const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
]

const REFRESH_INTERVAL = {
  second: 5000,
  minute: 60 * 1000,
  hour: 3600 * 1000,
  day: 86400 * 1000,
}

const getDateDiffs = (timestamp) => {
  const now = Date.now()
  const elapsed = (timestamp - now) / 1000 // dividido 1000 para quitar los ms

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === "second") {
      const value = Math.round(elapsed / secondsInUnit)
      return { value, unit }
    }
  }
}

const getTimeAgo = (timestamp) => {
  const { value, unit } = getDateDiffs(timestamp)
  const rtf = new Intl.RelativeTimeFormat(DEFAULT_LANGUAGE, {
    style: "long",
  })
  return rtf.format(value, unit)
}

export default function useTimeAgo(timestamp) {
  const [timeAgo, setTimeAgo] = useState(() => getTimeAgo(timestamp))

  useEffect(() => {
    let ms = REFRESH_INTERVAL.second

    const interval = setInterval(() => {
      const timeAgo = getTimeAgo(timestamp)
      ms = REFRESH_INTERVAL[timeAgo.unit]
      setTimeAgo(timeAgo)
    }, ms)

    return () => clearTimeout(interval)
  }, [timestamp])

  return timeAgo
}
