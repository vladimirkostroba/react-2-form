import React from "react";

const Filter = ({value,onChangeFilter }) =>{
      return(
        <div className="Filter">
            <input 
            type="text"
            value={value}
            onChange={e=>onChangeFilter(e.target.value)}></input>
        </div>
      )
}

export default Filter;