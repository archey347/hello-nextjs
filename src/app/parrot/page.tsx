export default function Home() {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        
        <div className="mb-4 p-4">
        
            <h1 className="text-4xl font-bold">Parrot</h1>
        
            <div className="mb-4 pt-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" for="message">
                    Message
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Message" />
            </div>
            <button className="btn btn-blue">Go</button>
        </div>
      </main>
    )
  }
  