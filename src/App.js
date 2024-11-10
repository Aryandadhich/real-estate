import HomePage from './routes/HomePage/HomePage';
import "./Design/layout.scss";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './routes/listPage/listPage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage />
      ),
    },
    {
      path: "/list",
      element: <ListPage />
    }
  ])
  return (

    // <div className="layout">
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className='content'>
    //     <HomePage />
    //   </div>
    // </div>
    <RouterProvider router={router} />
  );
}

export default App;