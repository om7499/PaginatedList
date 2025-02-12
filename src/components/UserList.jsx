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
    <ul>
    <div className='shadow row gap-2 px-5 py-5'>
      {
        paginatedUsers.map((data)=>{
            return (
             <li key={data.id} className='nav-link col-lg-3 col-md-3 col-sm-12 col-12 mx-auto '>
                
                <div className='my-2 border bg-secondary border-2 rounded py-3 px-4 mx-auto'>
                    <div className=' text-lg font-bold text-white'>
                    <p><strong>FullName :</strong> <span>{data.firstName} {data.lastName}</span> </p>
                    <p><strong>email :</strong> {data.email.slice(0,20)}</p>
                    <p><strong>phone :</strong> {data.phone}</p>
                    </div>  
                </div> 
                
            </li> 
          
            )
        })
      }
     
      </div>
    </ul>
    <div className='d-flex justify-content-between'>
      <div>
        <button  className='btn bg-primary text-white'
        onClick={()=>handlePrev()}
        disabled={currentPage === 1}><i className="bi bi-arrow-left-short"></i> Previous</button>
      </div>

      <div>
      <ul>
      {getPaginationNumbers().map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2  mx-2 shadow btn border ${page === currentPage ? 'bg-blue-700 text-green-400' : 'bg-gray-200 text-black'}`}
          >
            {page}
          </button>
          
        ))}

      </ul>
      </div>
      
      <div>
        <button  onClick={()=>handleNext()}
        disabled={currentPage === Math.ceil(data.length / usersPerPage)}
        className='btn bg-primary text-light'> Next <i className="bi bi-arrow-right-short"></i> </button>
       </div>
      </div>
    </>
  )
}

export default UserList
