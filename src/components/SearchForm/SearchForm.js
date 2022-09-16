import React from 'react'
import "./SearchForm.css"
function SearchForm() {
  return (
    <div className="search-form">    
          
                <input className='form-control' type="text" placeholder='Search Keyword'  />
                <input className='form-control' type="text" placeholder='Company' />
                <input className='form-control' type="text" placeholder='location' />
                <button className='btn btn-primary'>Find Job</button>
    </div>
  )
}

export default SearchForm