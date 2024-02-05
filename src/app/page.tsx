import { login } from '@/lib/_actions'

export default async function Home() {
  const data = await login()
  return (
    <main className='flex min-h-screen flex-col'>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}
