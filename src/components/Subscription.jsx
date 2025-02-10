import SubscriptionTopCard from "./Subscription/SubscriptionTopCard";
import { useState, useEffect } from "react";
import { useFetchDetail } from "../hooks/useFetchDetail";
import PaymentHistory from "./Subscription/PaymentHistory";

function Subscription() {
    const [subscriptionTopCardData, setSubscriptionTopCardData] = useState([]);
    const [paymentHistoryData, setPaymentHistoryData] = useState([]);

    useEffect(()=>{
        getSubscriptionTopCardData();
        getPaymentHistoryData();
    },[])
        
        
    async function getSubscriptionTopCardData() {
        const response = await useFetchDetail('https://payments.resmic.com/api/v1/user/plan-details');
        console.log(response);
        setSubscriptionTopCardData(response);
    }

    async function getPaymentHistoryData() {
        const response = await useFetchDetail('https://payments.resmic.com/api/v1/user/payment-history');
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