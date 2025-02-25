import { useEffect, useState } from "react";
import PaymentsList from "./Payment/PaymentsList";
import { useFetchDetail } from "../hooks/useFetchDetail";
import { useSelector } from "react-redux";

function Payment() {
    const [paymentData, setPaymentData] = useState([]);
    const token = useSelector((state) => state.auth.token);
    useEffect(()=>{
        getRecentPayment();
    },[])


    async function getRecentPayment() {
        const response = await useFetchDetail(`api/v1/dashboard/recent-txs?user_id=${token}`);
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