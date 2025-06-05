
import React, { useState } from 'react'
import { useOutletContext } from 'react-router'

const BloqPage = () => {
const {bloqs, setBloqs} = useOutletContext();

  return (
    <div>
      Top Stories
      <ul>
        {bloqs.map((bloq) => (
          <li key={bloq.id}>
            {bloq.des}
            <p>del</p>
            <p>like</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BloqPage