import CouponPage from "./Coupon/CouponPage";
import { useState, useEffect } from "react";
import { useFetchDetail } from "../hooks/useFetchDetail";
import { useSelector } from "react-redux";

function Coupon() {
    const [apiData, setAPIData] = useState([]);
    const token = useSelector((state) => state.auth.token);
        useEffect(()=>{
            getAPIData();
        },[])
    
    
        async function getAPIData() {
            const response = await useFetchDetail(`https://payments.resmic.com/api/v1/coupon/coupon-list?user_id=${token}`);
            setAPIData(response);
        }
    return(
        <>
            <div className="w-[100%] lg:w-[85%] min-h-screen p-4">
                <CouponPage data={apiData}/>
            </div>
        </>
    )
}

export default Coupon;