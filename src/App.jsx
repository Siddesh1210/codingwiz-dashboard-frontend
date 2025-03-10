import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './view/Navbar';
import SideBar from './view/SideBar';
import ProtectedRoute from './view/ProtectedRoute';

const Login = lazy(() => import('./view/Login'));
const Home = lazy(() => import('./view/Home'));
const Payment = lazy(() => import('./view/Payment'));
const Customer = lazy(() => import('./view/Customer'));
const PaymentLink = lazy(() => import('./view/PaymentLink'));
const Invoice = lazy(() => import('./view/Invoice'));
const Coupon = lazy(() => import('./view/Coupon'));
const Developer = lazy(() => import('./view/Developer'));
const Subscription = lazy(() => import('./view/Subscription'));
const Setting = lazy(() => import('./view/Setting'));
const AccountDetail = lazy(() => import('./components/Setting/AccountDetail'));
const BusinessDetail = lazy(() => import('./components/Setting/BusinessDetail'));

// Loader fallback
import Loader from './view/Loader';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideBar />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}><Home /></Suspense>
          </ProtectedRoute>
        )
      },
      {
        path: "/payment",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}><Payment /></Suspense>
          </ProtectedRoute>
        )
      },
      {
        path: "/customer",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}><Customer /></Suspense>
          </ProtectedRoute>
        )
      },
      {
        path: "/payment-link",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}><PaymentLink /></Suspense>
          </ProtectedRoute>
        )
      },
      {
        path: "/invoice",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}><Invoice /></Suspense>
          </ProtectedRoute>
        )
      },
      {
        path: "/coupon",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}><Coupon /></Suspense>
          </ProtectedRoute>
        )
      },
      {
        path: "/developer",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}><Developer /></Suspense>
          </ProtectedRoute>
        )
      },
      {
        path: "/subscription",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}><Subscription /></Suspense>
          </ProtectedRoute>
        )
      },
      {
        path: "/setting",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}><Setting /></Suspense>
          </ProtectedRoute>
        )
      },
      {
        path: "/setting/account-detail",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}><AccountDetail /></Suspense>
          </ProtectedRoute>
        )
      },
      {
        path: "/setting/business-detail",
        element: (
          <ProtectedRoute>
            <Suspense fallback={<Loader />}><BusinessDetail /></Suspense>
          </ProtectedRoute>
        )
      }
    ]
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loader />}><Login /></Suspense>
    )
  }
]);

export default App;
