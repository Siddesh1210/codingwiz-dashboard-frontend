import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAddDetail } from "../../hooks/useAddDetail";
import { useFetchDetail } from "../../hooks/useFetchDetail";
import { useSelector } from "react-redux";

function DeveloperPage({ apiData = [] }) {
  const [allData, setAllData] = useState(apiData);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.auth.token);

  
  const itemsPerPage = 5;
//   const totalPages = Math.ceil(allData.length / itemsPerPage);
//   const allData = allData.length > 0 ? allData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : [];

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

  useEffect(()=>{
    getallData()
  }, [apiData])

  async function getallData() {
    const response = await useFetchDetail(`https://payments.resmic.com/api/v1/api-key?user_id=${token}`);
    setAllData(response);
    console.log("Response is : ", allData);
  }

  const handleGenerateKey = async () => {
    if (!apiKey.trim()) return alert("API Key is required!");

    setLoading(true);
    try {
      const response = await useAddDetail('https://payments.resmic.com/api/v1/api-key', {
            email: "heydivyapawar@gmail.com",
            api_key: apiKey
        })
        console.log("Response is : ",response);
        toast.success("API Generated Successfully!", {
            position: "top-center",
            autoClose: 4000 
        });
        getallData();
      // Clear input
    } catch (error) {
      toast.error("API Generation Fail!", {
            position: "top-center",
            autoClose: 4000 
        });
    } finally {
        setShowModal(false);
        setApiKey(""); 
        setLoading(false);
    }
  };

  return (
    <>
      <div className="flex justify-between items-end flex-wrap mb-6">
        <h1 className="text-3xl font-bold">Personal Access Token</h1>
        <button onClick={() => setShowModal(true)} className="px-2 py-1 text-sm border border-gray-300 rounded-md cursor-pointer font-semibold">
          <i className="bi bi-plus-lg"></i> Generate Key
        </button>
      </div>

      <p className="text-sm">Tokens you have generated to access <span className="text-blue-500 cursor-pointer">Resmic API</span></p>

      <div className="overflow-x-auto rounded-md my-6">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="px-4 py-2 text-left">User ID</th>
              <th className="px-4 py-2 text-left">API Key</th>
              <th className="px-4 py-2 text-left">Created On</th>
              <th className="px-4 py-2 text-left">Expiry</th>
              <th className="px-4 py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {allData ? (
                <tr className="border-b">
                  <td className="px-4 py-2">{allData?.user_id || "N/A"}</td>
                  <td className="px-4 py-2">{allData?.api_key || "N/A"}</td>
                  <td className="px-4 py-2">{allData?.api_created_on ? new Date(allData.api_created_on).toLocaleString() : "N/A"}</td>
                  <td className="px-4 py-2">{allData?.api_expiry ? new Date(allData.api_expiry).toLocaleString() : "N/A"}</td>
                  <td className="px-4 py-2 text-center">
                    <button className="text-blue-600 hover:text-blue-800">Delete</button>
                  </td>
                </tr>
              ) : (
              <tr>
                <td colSpan={5} className="text-center py-2">No records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {/* {totalPages > 1 && (
        <div className="flex justify-center mt-4">
          <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50">
            Prev
          </button>
          <span className="px-4 py-2">{currentPage}</span>
          <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50">
            Next
          </button>
        </div>
      )} */}

      {/* No Keys Section */}
      {allData && (
        <div className="h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm my-2 text-gray-600">No key generated</p>
            <p className="text-md my-2">Generate your first personal access token</p>
            <button onClick={() => setShowModal(true)} className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
              <i className="bi bi-plus-lg"></i> Generate Key
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">Generate API Key</h2>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-md mb-4"
              placeholder="Enter API Key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 border border-gray-300 rounded-md">Cancel</button>
              <button onClick={handleGenerateKey} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                {loading ? "Generating..." : "Generate Key"}
              </button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default DeveloperPage;
