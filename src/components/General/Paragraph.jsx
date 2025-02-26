import React from 'react'

export default function Paragraph({children}) {
  return (
    <div className="space-y-2 sm:space-y-4 lg:space-y-8 text-base sm:text-lg">
        {children}
    </div>
  )
}
