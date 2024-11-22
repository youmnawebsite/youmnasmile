import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Gift() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h2 className="text-3xl font-bold mb-8">هدايا افتراضية</h2>
      <div className="mb-8">
        <p className="text-xl mb-4">🍫 علبة شوكولاتة: "لو حقيقي كان وصل دلوقتي."</p>
        <p className="text-xl mb-4">💐 باقة ورد: "الورد ده كله ليكي."</p>
      </div>
      <Link href="/final">
        <Button className="text-xl py-4 px-6 rounded-full">
          اضغطي هنا عشان توصلي للهدية الحقيقية
        </Button>
      </Link>
    </div>
  )
}

