'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Final() {
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h2 className="text-3xl font-bold mb-8">يمنى، إنتي أهم حاجة في حياتي. ما تبقيش زعلانة...</h2>
      <p className="text-xl mb-8">لو سامحاني، دوسي على الزر ده.</p>
      <Button 
        onClick={() => setShowMessage(true)} 
        className="text-2xl py-6 px-8 rounded-full animate-pulse"
      >
        سامحتك، بس مش ببلاش!
      </Button>
      {showMessage && (
        <p className="text-2xl mt-8 font-bold animate-bounce">هتعزمني على حاجة بقى!</p>
      )}
    </div>
  )
}

