import { useRef, useState, useEffect } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export default function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  useEffect(() => {
    const refCurrent = ref.current
    ro.observe(refCurrent)
    return () => ro.unobserve(refCurrent)
  }, [])
  return [{ ref }, bounds]
}
