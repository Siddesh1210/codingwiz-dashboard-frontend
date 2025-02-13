import SubscriptionTopCard from "./Subscription/SubscriptionTopCard";
import { useState, useEffect } from "react";
import { useFetchDetail } from "../hooks/useFetchDetail";
import PaymentHistory from "./Subscription/PaymentHistory";
import { useSelector } from "react-redux";


function Subscription() {
    const [subscriptionTopCardData, setSubscriptionTopCardData] = useState([]);
    const [paymentHistoryData, setPaymentHistoryData] = useState([]);
    const token = useSelector((state) => state.auth.token);

    useEffect(()=>{
        getSubscriptionTopCardData();
        getPaymentHistoryData();
    },[])
        
        
    async function getSubscriptionTopCardData() {
        const response = await useFetchDetail(`https://payments.resmic.com/api/v1/user/plan-details?user_id=KwL_XQ4`);
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
    }

    async function getPaymentHistoryData() {
        const response = await useFetchDetail(`https://payments.resmic.com/api/v1/user/plan-details?user_id=KwL_XQ4`);
        console.log(response);
        setPaymentHistoryData(response);
    }
    return(
        <>
            <div className="w-[100%] lg:w-[85%] min-h-screen p-4">
                <h1 className="text-3xl font-bold">Subscriptions</h1>
                <SubscriptionTopCard data={subscriptionTopCardData}/>
                <PaymentHistory data={paymentHistoryData}/>
            </div>
        </>
    )
}

export default Subscription;