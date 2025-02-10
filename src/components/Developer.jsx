import DeveloperPage from "./Developer/DeveloperPage";
import { useState, useEffect } from "react";
import { useFetchDetail } from "../hooks/useFetchDetail";

function Developer() {
    const [apiData, setAPIData] = useState([]);
        useEffect(()=>{
            getAPIData();
        },[])
    
    
        async function getAPIData() {
            const response = await useFetchDetail('https://payments.resmic.com/api/v1/api-key?user_id=ZAJ5_Bg');
            setAPIData(response);
        }
    return(
        <>
            <div className="w-[100%] lg:w-[85%] min-h-screen p-4">
                <DeveloperPage apiData={apiData}/>
            </div>
        </>
    )
}

export default Developer;