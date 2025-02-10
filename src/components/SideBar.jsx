import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function SideBar() {
    const location = useLocation();
    return(
        <>
            <div className="w-[15%] min-h-screen lg:flex flex-col hidden border-r-2">
                <ul className="flex flex-col justify-center items-start mt-4 text-md">
                    <Link to="/" className="text-gray-800 cursor-pointer p-2 rounded w-full">
                        <div
                            className={`px-2 py-2 rounded-md mr-2 ${
                                location.pathname === "/" ? "bg-primary text-white" : "text-primary"
                            }`}
                        >
                            <i className="bi bi-grid"></i> Home
                        </div>
                    </Link>
                    <Link to="/payment" className="text-gray-800 cursor-pointer p-2 rounded w-full">
                        <div
                            className={`px-2 py-2 rounded-md mr-2 ${
                                location.pathname === "/payment" ? "bg-primary text-white" : "text-primary"
                            }`}
                        >
                            <i className="bi bi-wallet2"></i> Payment
                        </div>
                    </Link>
                    <Link to="/customer" className="text-gray-800 cursor-pointer p-2 rounded w-full">
                        <div
                            className={`px-2 py-2 rounded-md mr-2 ${
                                location.pathname === "/customer" ? "bg-primary text-white" : "text-primary"
                            }`}
                        >
                            <i className="bi bi-list-columns"></i> Customer
                        </div>
                    </Link>
                    <Link to="/payment-link" className="text-gray-800 cursor-pointer p-2 rounded w-full">
                        <div
                            className={`px-2 py-2 rounded-md mr-2 ${
                                location.pathname === "/payment-link" ? "bg-primary text-white" : "text-primary"
                            }`}
                        >
                            <i className="bi bi-list-columns"></i> Payment Links
                        </div>
                    </Link>

                    <Link to="/invoice" className="text-gray-800 cursor-pointer p-2 rounded w-full">
                        <div
                            className={`px-2 py-2 rounded-md mr-2 ${
                                location.pathname === "/invoice" ? "bg-primary text-white" : "text-primary"
                            }`}
                        >
                            <i className="bi bi-list-columns"></i> Invoice
                        </div>
                    </Link>

                    <Link to="/coupon" className="text-gray-800 cursor-pointer p-2 rounded w-full">
                        <div
                            className={`px-2 py-2 rounded-md mr-2 ${
                                location.pathname === "/coupon" ? "bg-primary text-white" : "text-primary"
                            }`}
                        >
                            <i className="bi bi-graph-up"></i> Coupons
                        </div>
                    </Link>

                    <Link to="/developer" className="text-gray-800 cursor-pointer p-2 rounded w-full">
                        <div
                            className={`px-2 py-2 rounded-md mr-2 ${
                                location.pathname === "/developer" ? "bg-primary text-white" : "text-primary"
                            }`}
                        >
                            <i className="bi bi-gear"></i> Developer
                        </div>
                    </Link>

                    <Link to="/subscription" className="text-gray-800 cursor-pointer p-2 rounded w-full">
                        <div
                            className={`px-2 py-2 rounded-md mr-2 ${
                                location.pathname === "/subscription" ? "bg-primary text-white" : "text-primary"
                            }`}
                        >
                            <i className="bi bi-gear"></i> Subscription
                        </div>
                    </Link>

                    <Link to="/setting" className="text-gray-800 cursor-pointer p-2 rounded w-full">
                        <div
                            className={`px-2 py-2 rounded-md mr-2 ${
                                location.pathname === "/setting" || location.pathname === "/setting/account-detail" || location.pathname === "/setting/business-detail" ? "bg-primary text-white" : "text-primary"
                            }`}
                        >
                            <i className="bi bi-gear"></i> Settings
                        </div>
                    </Link>

                    <a href= "mailto:support@resmic.com" className="text-gray-800 cursor-pointer p-2 rounded w-full">
                        <div
                            className={`px-2 py-2 rounded-md mr-2 text-primary`}
                        >
                            <i className="bi bi-gear"></i> Support
                        </div>
                    </a>
                </ul>
            </div>
        </>
    )
}

export default SideBar;