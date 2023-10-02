'use client'
import { useState } from 'react'

const Editor = (entry) => {
  const [value, setValue] = useState(entry.content)
  return (
    <div className="h-[calc(100vh-60px)] outline-none">
      <div className="h-full w-full px-6 flex items-center justify-end outline-none">
        <textarea
          className="w-full h-full p-8 text-xl outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Editor
