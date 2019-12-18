import React from 'react'

const Filter = props =>{
    return (
        <div>
            <select onChange={(event)=> props.filterClass(event.target.value)}>
                <option value="All">All</option>  
                <option value="Support">Support</option>   
                <option value="Defender">Defender</option>   
                <option value="Assault">Assault</option>   
            </select> 
        </div>
    )
}

export default Filter