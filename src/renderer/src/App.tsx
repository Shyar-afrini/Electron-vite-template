/* eslint-disable react/no-unescaped-entities */
function App(): JSX.Element {
  return (
    <div className="bg-black h-screen w-screen p-12 flex flex-col gap-3 items-center justify-center">
      <h1 className="text-5xl text-white font-bold">
        Hello <span className="text-blue-400">World</span>
      </h1>
      <p className="text-white/80 text-sm">This is a template starter for electron js with vite</p>
      <p className="text-white/80 text-sm">
        Start editing at{' '}
        <span className="text-blue-400 cursor-pointer">"/renderer/src/app.tsx"</span>
      </p>
    </div>
  )
}

export default App
