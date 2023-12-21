import Parrot from './parrot'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="mb-4 p-4 items-center">
        <h1 className="text-4xl font-bold text-center">Parrot</h1>
        <Parrot />
        <p className="p-4 text-center"><i>This is an example of a client-side only component</i></p>
        
      </div>
    </main>
  )
}
