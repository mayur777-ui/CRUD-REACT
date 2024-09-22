// import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Addtask from './components/Addtask';
import Show from './components/Show';
import EditTask from './components/EditTask';
const appRouter = createBrowserRouter([
  {
    path:'/addTask',
    element:<Addtask/>
  },
  {
    path:'/',
    element:<Show/>,
  },
  {
    path:'/editTask/:id',
    element:<EditTask/>,
  }
])
function App() {
  

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App;
