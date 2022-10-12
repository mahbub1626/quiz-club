
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistic from './components/Statistic/Statistic';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },

        {
          path: 'quiz',
          // loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Quiz></Quiz>
        },
        {
          path: 'quiz/:quizId',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <Quiz></Quiz>
        },

        {
          path: 'statistic',
          element: <Statistic></Statistic>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: '/*',
          element: <Error></Error>
        }, 
      ]
      
    },
    
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}>
      </RouterProvider>
    </div>
  );
}

export default App;
