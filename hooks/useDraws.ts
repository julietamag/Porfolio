/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react'

export const useDraw = (onDraw: ({ ctx, currentPoint, prevPoint }: Draw) => void) => {
  const [mouseDown, setMouseDown] = useState(false)

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const prevPoint = useRef<null | Point>(null)

  const onMouseDown = () => setMouseDown(true)
  const onTouchStart = () => setMouseDown(true)

  const clear = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (!mouseDown) return

      const currentPoint = computePointInCanvas(e)

      const ctx = canvasRef.current?.getContext('2d')
      if (!ctx || !currentPoint) return

      onDraw({ ctx, currentPoint, prevPoint: prevPoint.current })
      prevPoint.current = currentPoint
    }

    const computePointInCanvas = (e: MouseEvent | TouchEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      let x: number, y: number
      if (e instanceof MouseEvent) {
        x = e.clientX - rect.left
        y = e.clientY - rect.top
      } else {
        const touch = e.touches[0]
        x = touch.clientX - rect.left
        y = touch.clientY - rect.top
      }

      return { x, y }
    }

    const mouseUpHandler = () => {
      setMouseDown(false)
      prevPoint.current = null
    }

    const onTouchEndHandler = () => {
      setMouseDown(false)
      prevPoint.current = null
    }

    // Add event listeners
    canvasRef.current?.addEventListener('mousemove', handler)
    canvasRef.current?.addEventListener('touchmove', handler)
    window.addEventListener('mouseup', mouseUpHandler)
    window.addEventListener('touchend', onTouchEndHandler)

    // Remove event listeners
    return () => {
      canvasRef.current?.removeEventListener('mousemove', handler)
      canvasRef.current?.removeEventListener('touchmove', handler)
      window.removeEventListener('mouseup', mouseUpHandler)
      window.removeEventListener('touchend', onTouchEndHandler)
    }
  }, [mouseDown, onDraw])

  return { canvasRef, onMouseDown, onTouchStart, clear }
}
