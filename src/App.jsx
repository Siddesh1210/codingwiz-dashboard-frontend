import Login from './components/Login'
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Payment from './components/Payment';
import Customer from './components/Customer';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProtectedRoute from './components/ProtectedRoute';
import PaymentLink from './components/PaymentLink';
import Invoice from './components/Invoice';
import Coupon from './components/Coupon';
import Developer from './components/Developer';
import Subscription from './components/Subscription';
import Setting from './components/Setting';
import Support from './components/Support';
import AccountDetail from './components/Setting/AccountDetail';
import BusinessDetail from './components/Setting/BusinessDetail';
const App = () => {
  return (
    <>
        <Provider store={store}>
            <Navbar/>
            <div className='flex'>
                <SideBar/>
                <Outlet/>
            </div>
        </Provider>
    </>
  )
}

export const routes = createBrowserRouter([ 
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: (
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                )
            },
            {
                path: "/payment",
                element: (
                    <ProtectedRoute>
                        <Payment/>
                    </ProtectedRoute>
                )
            },
            {
                path: "/customer",
                element: (
                    <ProtectedRoute>
                        <Customer/>
                    </ProtectedRoute>
                )
            },
            {
                path: "/payment-link",
                element: (
                    <ProtectedRoute>
                        <PaymentLink/>
                    </ProtectedRoute>
                )
            },
            {
                path: "/invoice",
                element: (
                    <ProtectedRoute>
                        <Invoice/>
                    </ProtectedRoute>
                )
            },
            {
                path: "/coupon",
                element: (
                    <ProtectedRoute>
                        <Coupon/>
                    </ProtectedRoute>
                )
            },
            {
                path: "/developer",
                element: (
                    <ProtectedRoute>
                        <Developer/>
                    </ProtectedRoute>
                )
            },
            {
                path: "/subscription",
                element: (
                    <ProtectedRoute>
                        <Subscription/>
                    </ProtectedRoute>
                )
            },
            {
                path: "/setting",
                element: (
                    <ProtectedRoute>
                        <Setting/>
                    </ProtectedRoute>
                )
            },
            {
                path: "/setting/account-detail",
                element: (
                    <ProtectedRoute>
                        <AccountDetail/>
                    </ProtectedRoute>
                )
            },
            {
                path: "/setting/business-detail",
                element: (
                    <ProtectedRoute>
                        <BusinessDetail/>
                    </ProtectedRoute>
                )
            }
            
        ]
    },
    {
        path: "/login",
        element: <Login/>
    }
])

export default App;