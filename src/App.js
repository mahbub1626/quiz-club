
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Quiz from './components/Quiz/Quiz';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          // loader: () => fetch('tshirts.json'),
          element:<Quiz></Quiz>
        },
        
        {
          path: '/quiz',
          // loader: () => fetch('tshirts.json'),
          element:<Quiz></Quiz>
        },
        
        {
          path: '/about',
          // loader: () => fetch('tshirts.json'),
          element:<About></About>
        },
        
      ]
    }
      ]);
  return (
    <div className="App">
      <RouterProvider router={router}>



      </RouterProvider>
    </div>
  );
}

export default App;
