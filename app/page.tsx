import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <h1 className="text-4xl font-bold mb-8">رجعي الضحكة يا يمنى</h1>
      <p className="text-xl mb-8 max-w-2xl">
        يمنى... أنا مش هتحرك من هنا غير لما الضحكة ترجع لوشك! دوسي على أي حاجة، بس ما تقفليش الصفحة.
      </p>
      <Link href="/quiz">
        <Button className="text-2xl py-6 px-8 rounded-full animate-bounce">
          هنتصالح؟
        </Button>
      </Link>
    </main>
  )
}

