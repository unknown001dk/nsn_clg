import React, { useState, useEffect } from "react";
import axios from "axios";
import './RouteChangeRequest.css'

const RouteChangeRequests = () => {
  const [requests, setRequests] = useState([]); // To store API data
  const [searchQuery, setSearchQuery] = useState(""); // To track the search input
  const [loading, setLoading] = useState(true); // To manage loading state
  const [error, setError] = useState(null); // To manage errors
  const [currentPage, setCurrentPage] = useState(1); // To manage the current page
  const [itemsPerPage] = useState(5); // Items per page (5 per page)

  // Fetch data from the API using Axios
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8081/api/v1/route-change"
        );
        setRequests(response.data); // Store the fetched data
        setLoading(false); // Stop loading
      } catch (err) {
        setError(err.message); // Set the error message
        setLoading(false); // Stop loading
      }
    };

    fetchRequests();
  }, []);

  // Filter requests based on the search query
  const filteredRequests = requests.filter((request) => {
    return (
      request.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.uid.toLowerCase().includes(searchQuery.toLowerCase()) ||
      request.previousBusNo.includes(searchQuery) ||
      request.newBusNo.includes(searchQuery)
    );
  });

  // Pagination logic: Determine the start and end indices for the current page
  const indexOfLastRequest = currentPage * itemsPerPage;
  const indexOfFirstRequest = indexOfLastRequest - itemsPerPage;
  const currentRequests = filteredRequests.slice(indexOfFirstRequest, indexOfLastRequest);

  // Handle page navigation
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Conditional rendering based on loading, error, and data availability
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h2>Route Change Requests</h2>
      <input
        type="text"
        className="search-input"
        placeholder="Search by name, UID, or bus number..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="table-wrapper">
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Status</th>
              <th>First Name</th>
              <th>UID</th>
              <th>Previous Route</th>
              <th>New Route</th>
              <th>Previous Bus No</th>
              <th>New Bus No</th>
              <th>Purpose</th>
              <th>Date Submitted</th>
            </tr>
          </thead>
          <tbody>
            {currentRequests.length > 0 ? (
              currentRequests.map((request) => (
                <tr key={request._id}>
                  <td>{request.status}</td>
                  <td>{request.firstName}</td>
                  <td>{request.uid}</td>
                  <td>{request.previousRoute}</td>
                  <td>{request.newRoute}</td>
                  <td>{request.previousBusNo}</td>
                  <td>{request.newBusNo}</td>
                  <td>{request.purpose}</td>
                  <td>{new Date(request.dateSubmitted).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" style={{ textAlign: "center" }}>
                  No matching requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {[...Array(Math.ceil(filteredRequests.length / itemsPerPage)).keys()].map(
          (number) => (
            <button
              key={number}
              onClick={() => paginate(number + 1)}
              className={currentPage === number + 1 ? "active" : ""}
            >
              {number + 1}
            </button>
          )
        )}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredRequests.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RouteChangeRequests;
