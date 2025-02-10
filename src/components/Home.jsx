import { useEffect } from "react";
import HomeFeature from "./Home/HomeFeature";
import HomeTopCard from "./Home/HomeTopCard";
import TransactionChart from "./Home/TransactionChart";
import RecentPayment from "./Payment/RecentPayment";
import { useFetchDetail } from "../hooks/useFetchDetail";
import { useState } from "react";

function Home() {
    const [homeTopCardData, setHomeTopCardData] = useState([]);
    const [transactionChartData, setTransactionChartData] = useState([]);
    const [paymentData, setPaymentData] = useState([]);

    useEffect(()=>{
        getHomeTopCardData();
        getTransactionChartData();
        getRecentPayment();
    },[])

    async function getHomeTopCardData() {
        const response = await useFetchDetail('https://payments.resmic.com/api/v1/dashboard/stats?user_id=ZAJ5_Bg');
        console.log(response[0]);
        setHomeTopCardData(response[0]);
    }

    async function getTransactionChartData() {
        const response = await useFetchDetail('https://payments.resmic.com/api/v1/dashboard/graph?user_id=ZAJ5_Bg');
        console.log(response);
        setTransactionChartData(response);
    }

    async function getRecentPayment() {
        const response = await useFetchDetail('https://payments.resmic.com/api/v1/dashboard/recent-txs?user_id=ZAJ5_Bg');
        console.log(response);
        setPaymentData(response);
    }


    return(
        <>
            <div className="w-[100%] lg:w-[85%] min-h-screen p-4">
                <h1 className="text-3xl font-bold">Today</h1>
                <HomeTopCard data={homeTopCardData}/>
                <div className="flex flex-wrap-reverse justify-between items-center">
                    <TransactionChart apiData={transactionChartData}/>
                    <HomeFeature data={homeTopCardData}/>
                </div>
                <RecentPayment data={paymentData}/>
            </div>
        </>
    )
}

export default Home;