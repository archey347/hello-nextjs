export default function Home({ params } : { params: { message: string }}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold text-center p-2">Parrot</h1>
      <p>
        You said: {params.message}
      </p>
      <p>
        <i>This is an example of a dynamic route.</i>
      </p>
    </main>
  )
}
