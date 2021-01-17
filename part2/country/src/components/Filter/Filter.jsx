import React from 'react'

const Filter = ({ searchContent, handleSearchChange }) => {
    return (
        <div>
          filter shown with: <input value={searchContent} onChange={handleSearchChange} />
        </div>
    )
}

export default Filter
