import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AddPage from './Components/AddPage'
import BloqPage from './Components/BloqPage'
import HomePage from './Components/HomePage'
import RootLayout from './Components/RootLayout'
import FullBloq from './Components/FullBloq'

const router = createBrowserRouter(([
  {
    index: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },

      {
        path: "add",
        Component: AddPage
      },

      {
        path: "bloq",
        Component: BloqPage,
        children: [
          {
            path: "full",
            Component: FullBloq
          }
        ]
      },


    ]
  }

]))

const App = () => {
  return <RouterProvider router={router} />

}

export default App