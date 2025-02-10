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
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Payment History</h1>
        <div className="relative">
            <select
                value={statusFilter}
                onChange={handleFilterChange}
                className="text-sm px-4 py-2 border border-gray-300 rounded-md"
            >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="success">Success</option>
                <option value="failure">Failure</option>
            </select>
            <p className="absolute -top-3 left-1 bg-white px-2 text-primary">Status</p>
          </div>
      </div>

      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="px-4 py-2 text-left">Transaction ID</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Amount</th>
              <th className="px-4 py-2 text-left">From Wallet</th>
              <th className="px-4 py-2 text-left">To Wallet</th>
              <th className="px-4 py-2 text-left">Created At</th>
            </tr>
          </thead>
          <tbody>
            {
                currentItems?.length !== 0 ? (
                    currentItems?.map((item) => (
                        <tr key={item?.transaction_id} className="border-b">
                          <td className="px-4 py-2">{item?.transaction_id}</td>
                          <td className="px-4 py-2">{item?.status}</td>
                          <td className="px-4 py-2">{item?.amount}</td>
                          <td className="px-4 py-2">{item?.from_wallet_address}</td>
                          <td className="px-4 py-2">{item?.to_wallet_address}</td>
                          <td className="px-4 py-2">{new Date(item?.created_at)?.toLocaleString()}</td>
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

      {/* Pagination */}
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
    </div>
  );
};

export default PaymentHistory;
