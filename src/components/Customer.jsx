import { useState, useEffect } from "react";
import { useFetchDetail } from "../hooks/useFetchDetail";
import CustomerList from "./Customer/CustomerList";
import { useSelector } from "react-redux";
function Customer() {
     const [customerList, setCustomerList] = useState([]);
     const token = useSelector((state) => state.auth.token);
        useEffect(()=>{
            getCustomerList();
        },[])
    
    
        async function getCustomerList() {
            const response = await useFetchDetail(`https://payments.resmic.com/api/v1/dashboard/unique-users?user_id=${token}`);
            console.log(response);
            setCustomerList(response);
        }
    return(
        <>
            <div className="w-[100%] lg:w-[85%] min-h-screen p-4">
                <CustomerList data={customerList}/>
            </div>
        </>
    )
}

export default Customer;