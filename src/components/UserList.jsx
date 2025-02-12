import React,{useState} from 'react'

const UserList = ({data=[]}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;
  
   
    // Calculate pagination indexes
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const paginatedUsers = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / usersPerPage);

  // Handle next & previous buttons
  const handleNext = () => {
    if (currentPage < Math.ceil(data.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
      
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1); 
    }
  };

  // Generate pagination numbers (showing only 3 pages at a time)
  const getPaginationNumbers = () => {
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, startPage + 2);
    if (endPage - startPage < 2) {
      startPage = Math.max(1, endPage - 2);
    }
    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
  };
   
  return (
    <>
     <div className="container">
      {/* User List Section */}
      <ul className="row justify-content-center gap-3 px-3 py-5 shadow">
        {paginatedUsers.map((user) => (
          <li key={user.id} className="col-lg-3 col-md-4 col-sm-12 col-12 nav-link">
            <div className="border bg-secondary border-2 rounded py-3 px-4 text-white text-center shadow">
              <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
              <p><strong>Email:</strong> {user.email.slice(0, 20)}</p>
              <p><strong>Phone:</strong> {user.phone}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
        {/* Previous Button */}
        <button
          className="btn btn-primary px-3"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          <i className="bi bi-arrow-left-short"></i> Previous
        </button>

        {/* Pagination Numbers */}
        <div className="d-flex gap-2">
          {getPaginationNumbers().map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 btn border ${
                page === currentPage ? 'bg-primary text-white' : 'bg-light text-dark'
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="btn btn-primary px-3"
        >
          Next <i className="bi bi-arrow-right-short"></i>
        </button>
      </div>
    </div>
    </>
  )
}

export default UserList
