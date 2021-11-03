import React from 'react'

export default function Filter({filter, setFilter}) {
    return (
        <span>
            Search: {' '}
            <input  value={filter || ''} 
            onChange={e => setFilter(e.target.value)}
            />
        </span>
    )
}
