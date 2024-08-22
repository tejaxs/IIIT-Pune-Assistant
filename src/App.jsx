import './App.css';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { Home } from './pages/Home.jsx';
import Master from './pages/Master.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div className='home-container'>
      <Navbar/>
      <Home />
      <Footer/>
     </div>
    },
    {
      path: "/bot",
      element: <Master/>
    },
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

