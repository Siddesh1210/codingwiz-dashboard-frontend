import { useEffect, useState } from "react";
import PaymentsList from "./Payment/PaymentsList";
import { useFetchDetail } from "../hooks/useFetchDetail";

function Payment() {
    const [paymentData, setPaymentData] = useState([]);
    useEffect(()=>{
        getRecentPayment();
    },[])


    async function getRecentPayment() {
        const response = await useFetchDetail('https://payments.resmic.com/api/v1/dashboard/recent-txs?user_id=ZAJ5_Bg');
        console.log(response);
        setPaymentData(response);
    }

    return(
        <>
            <div className="w-[100%] lg:w-[85%] min-h-screen p-4">
                <PaymentsList data={paymentData}/>
            </div>
        </>
    )
}

export default Payment;