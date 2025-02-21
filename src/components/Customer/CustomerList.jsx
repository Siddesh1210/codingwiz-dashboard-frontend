import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";

const CustomerList = ({data}) => {
  const [filteredData, setFilteredData] = useState(data);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [alertText, setAlertText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

  const handleFilterChange = (e) => {
    setStatusFilter(e?.target?.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e?.target?.value);
  };

  const handleFromDateChange = (e) => {
    const newFromDate = e?.target?.value;
    setFromDate(newFromDate);
  
    // Use the new value and latest state for validation
    if (!newFromDate || !toDate) {
      setAlertText("To view data, please select both dates.");
    } else {
      setAlertText("");
    }
  };
  
  const handleToDateChange = (e) => {
    const newToDate = e?.target?.value;
    setToDate(newToDate);
  
    // Use the new value and latest state for validation
    if (!fromDate || !newToDate) {
      setAlertText("To view data, please select both dates.");
    } else {
      setAlertText("");
    }
  };

  const resetFilters = () => {
    setStatusFilter("all");
    setSearchQuery("");
    setFromDate("");
    setToDate("");
    setAlertText("");
  };

  // Apply filters whenever the statusFilter, searchQuery, or date values change
  useEffect(() => {
    let filtered = data;

    // Status Filter
    if (statusFilter !== "all") {
      filtered = filtered?.filter((item) => item?.status === statusFilter);
    }

    // Search Query Filter
    if (searchQuery) {
      filtered = filtered?.filter((item) =>
        item?.from_wallet_address?.toLowerCase()?.includes(searchQuery?.toLowerCase())
      );
    }

    // Date Filters
    if (fromDate) {
        let fromDateStart = new Date(fromDate);
        fromDateStart.setHours(0, 0, 0, 0); // Start of the day
    
        filtered = filtered?.filter((item) => {
            let itemDate = new Date(item?.last_transaction_date);
            return itemDate >= fromDateStart;
        });
    }
    
    if (toDate) {
        let toDateEnd = new Date(toDate);
        toDateEnd.setHours(23, 59, 59, 999); // End of the day
    
        filtered = filtered?.filter((item) => {
            let itemDate = new Date(item?.last_transaction_date);
            return itemDate <= toDateEnd;
        });
    }

    setFilteredData(filtered);
    console.log("Filteres Data is : ", data);
    setCurrentPage(1); // Reset to the first page when filters change
  }, [statusFilter, searchQuery, fromDate, toDate, data]);

//   useEffect(()=>{
//     setFilteredData(data);
//   }, [data])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  const exportToExcel = () => {
    const ws = XLSX?.utils?.json_to_sheet(filteredData);
    const wb = XLSX?.utils?.book_new();
    XLSX?.utils?.book_append_sheet(wb, ws, "Customers");
    XLSX?.writeFile(wb, "customers.xlsx");
  };

  return (
    <div>
    <div className="w-full p-3">
      <h1 className="text-3xl font-bold mb-6">Customers</h1>
      <div className="mb-4 flex md:justify-end items-center flex-wrap gap-2">
        <div className="flex items-center space-x-4 flex-wrap gap-y-6 text-sm">
          <div className="relative">
            <input
                type="text"
                placeholder="Search by User Address"
                value={searchQuery}
                onChange={handleSearchChange}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm"
            />
            <p className="absolute -top-3 left-1 bg-white px-2 text-primary">User Address</p>
          </div>
          {/* <div className="relative">
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
          </div> */}
          <div className="relative">
                <input
                    type="date"
                    value={fromDate}
                    onChange={handleFromDateChange}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm"
                />
                <p className="absolute -top-3 left-1 bg-white px-2 text-primary">
                    Start Date
                </p>
            </div>

            <div className="relative">
                <input
                    type="date"
                    value={toDate}
                    onChange={handleToDateChange}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm"
                />
                <p className="absolute -top-3 left-1 bg-white px-2 text-primary">
                    End Date
                </p>
            </div>
            </div>
          <button
            onClick={resetFilters}
            className="px-4 py-2 border border-primary text-primary rounded-md text-sm"
          >
            Reset Filters
          </button>
          <button
            onClick={exportToExcel}
            className="px-4 py-2 bg-primary text-white rounded-md text-sm"
          >
            Export to XLSX
          </button>
        </div>
        {alertText && <p className="text-red-500 text-center">{alertText}</p>}
      </div>

      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full bg-white border border-gray-200 text-sm text-center">
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Total Spent</th>
              <th className="px-4 py-2">Total Transaction</th>
              <th className="px-4 py-2">First Payment</th>
              <th className="px-4 py-2">Last Payment</th>
              <th className="px-4 py-2">Tag</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              currentItems?.length !== 0 ? (
                currentItems?.map((item) => (
                  <tr key={item?.transaction_id} className="border-b">
                    <td className="px-4 py-2">{item?.from_wallet_address
                            ? `${item.from_wallet_address.slice(0, 6)}...${item.from_wallet_address.slice(-4)}`
                            : ""}</td>
                    <td className="px-4 py-2">$ {item?.total_amount}</td>
                    <td className="px-4 py-2">{item?.total_transactions}</td>
                    <td className="px-4 py-2">{new Date(item?.first_transaction_date)?.toLocaleString()}</td>
                    <td className="px-4 py-2">{new Date(item?.last_transaction_date)?.toLocaleString()}</td>
                    <td className="px-4 py-2">{item?.tag || "N/A"}</td>
                    <td className="px-4 py-2">{item?.action || "-"}</td>
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

export default CustomerList;
