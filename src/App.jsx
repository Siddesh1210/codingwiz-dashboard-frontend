import Login from './components/Login'
import { createBrowserRouter, Outlet } from 'react-router-dom';
const App = () => {
  return (
    <Outlet/>
  )
}

export const routes = createBrowserRouter([ {
    path:"/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/login",
            element: <Login/>
        }
    ]
}])

export default App;