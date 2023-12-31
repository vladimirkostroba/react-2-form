import React from "react";
import PropTypes from 'prop-types';

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

Filter.propTypes = {
  value:PropTypes.string.isRequired,
  onChangeFilter:PropTypes.func.isRequired,
}

export default Filter;

