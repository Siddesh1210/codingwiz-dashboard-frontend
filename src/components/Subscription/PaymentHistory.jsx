import React, { useEffect, useState } from "react";

const PaymentHistory = ({data}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [statusFilter, setStatusFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleFilterChange = (e) => {
    const filterValue = e?.target?.value;
    setStatusFilter(filterValue);

    if (filterValue === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(data?.filter((item) => item?.status === filterValue));
    }
    setCurrentPage(1); // Reset to the first page
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(()=>{
    setFilteredData(data)
  }, [data])

  // Calculate the indices of the first and last items on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="w-[100%] p-3">
      {
        filteredData?.length>0 && (
            <div className="flex justify-center mt-4">
                <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50"
                >
                Prev
                </button>
                <span className="px-4 py-2">{currentPage}</span>
                <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage * itemsPerPage >= filteredData?.length}
                className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50"
                >
                Next
                </button>
            </div>
        )
      }

      {
        filteredData?.length>0 && (
            <div className="overflow-x-auto rounded-md">
                <table className="min-w-full bg-white border border-gray-200 text-sm">
                <thead>
                    <tr className="border-b bg-gray-100">
                    <th className="px-4 py-2 text-left">Date</th>
                    <th className="px-4 py-2 text-left">Amount</th>
                    <th className="px-4 py-2 text-left">Tier</th>
                    <th className="px-4 py-2 text-left">Start Date</th>
                    <th className="px-4 py-2 text-left">End Date</th>
                    <th className="px-4 py-2 text-left">Method</th>
                    <th className="px-4 py-2 text-left">More</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentItems?.length !== 0 ? (
                            currentItems?.map((item) => (
                                <tr key={item?.created_at} className="border-b">
                                <td className="px-4 py-2">{item?.created_at}</td>
                                <td className="px-4 py-2">{item?.amount}</td>
                                <td className="px-4 py-2">{item?.tier}</td>
                                <td className="px-4 py-2">{new Date(item?.start_date)?.toLocaleString()}</td>
                                <td className="px-4 py-2">{new Date(item?.end_date)?.toLocaleString()}</td>
                                <td className="px-4 py-2">{item?.method || "N/A"}</td>
                                <td className="px-4 py-2">{item?.more || "N/A"}</td>
                                

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center py-2">
                                No recent payments found.
                                </td>
                            </tr>
                        )
                    }
                    
                </tbody>
                </table>
            </div>
        )
      }

      {/* Pagination */}
      {
        filteredData?.length>0 && (
            <div className="flex justify-center mt-4">
                <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50"
                >
                Prev
                </button>
                <span className="px-4 py-2">{currentPage}</span>
                <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage * itemsPerPage >= filteredData?.length}
                className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50"
                >
                Next
                </button>
            </div>
        )
      }

      {/* No Keys Section */}
      {filteredData?.length==0 && (
        <div className="h-[50vh] flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm my-2 text-gray-600">No Subscription Found</p>
            <p className="text-md my-2">20 days free trial</p>
            <button className="px-2 py-1 bg-blue-500 text-white rounded-md cursor-pointer">
              <i className="bi bi-plus-lg"></i> Start Trial
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
