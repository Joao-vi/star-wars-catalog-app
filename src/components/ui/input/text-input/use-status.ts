import { useState } from 'react'

export const useStatus = (error: boolean) => {
  let [status, setStatus] = useState<'idle' | 'focus' | 'error'>('idle')

  if (error) {
    status = 'error'
  }

  return {
    status,
    setStatus,
  }
}
