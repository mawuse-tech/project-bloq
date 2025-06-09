
import React, { useState } from 'react'
import { useOutletContext } from 'react-router'
import 'remixicon/fonts/remixicon.css';

const FullBloq = () => {
  const { bloqs } = useOutletContext();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">

      <ul className="space-y-6">
        {bloqs.map((bloq) => (
          <li
            key={bloq.id}
            className="p-5 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <strong className="block text-xl font-semibold text-gray-700 mb-2">
              {bloq.title} </strong>
            <p className="text-gray-600 mb-4">{bloq.description}</p>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default FullBloq