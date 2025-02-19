import SubscriptionTopCard from "./Subscription/SubscriptionTopCard";
import { useState, useEffect } from "react";
import { useFetchDetail } from "../hooks/useFetchDetail";
import PaymentHistory from "./Subscription/PaymentHistory";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Subscription() {
    const [subscriptionTopCardData, setSubscriptionTopCardData] = useState([]);
    const [paymentHistoryData, setPaymentHistoryData] = useState([]);
    const token = useSelector((state) => state.auth.token);

    useEffect(()=>{
        getSubscriptionTopCardData();
        getPaymentHistoryData();
    },[])
        
        
    async function getSubscriptionTopCardData() {
        try {
            const response = await useFetchDetail(`https://payments.resmic.com/api/v1/user/plan-details?user_id=${token}`);
            console.log(response[0]);
            // setSubscriptionTopCardData(response[0]);
            // Assuming response[0] contains the data
            const formattedData = {
                ...response[0],
                created_at: response[0]?.created_at?.split("T")[0], // Extract only the date part
                end_date: response[0]?.end_date?.split("T")[0] // Extract only the date part
            };
            
            // Set the formatted data in state
            setSubscriptionTopCardData(formattedData);
        } catch (error) {
            toast.error(error || "Something went wrong!", {
                position: "top-center",
                autoClose: 4000
            });
        }
    }

    async function getPaymentHistoryData() {
            const response = await useFetchDetail(`https://payments.resmic.com/api/v1/user/plan-details?user_id=${token}`);
            console.log(response);
            setPaymentHistoryData(response);
    }

    return(
        <>
            <div className="w-[100%] lg:w-[85%] min-h-screen p-4">
            <div className="flex justify-between items-end flex-wrap mb-6">
                <h1 className="text-3xl font-bold">Subscriptions</h1>
                <button className="px-2 py-1 text-sm bg-primary text-white rounded-md cursor-pointer font-semibold">
                <i className="bi bi-plus-lg"></i> Buy Subscription
                </button>
            </div>
                <SubscriptionTopCard data={subscriptionTopCardData}/>
                <PaymentHistory data={paymentHistoryData}/>
            </div>
            <ToastContainer/>
        </>
    )
}

export default Subscription;