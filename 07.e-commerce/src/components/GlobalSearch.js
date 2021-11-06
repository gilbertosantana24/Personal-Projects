import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as constants from '../constants'
import './globalsearch.css';

const GlobalSearch = () => {

// Our sample dropdown options
const options = ["Macbook", "Lenovo"]

return (
	<div className="combobox" >
	<Autocomplete
		options={options}
		
		renderInput={(params) =>
		<TextField {...params} label="Search Items" variant="outlined" />}
	/>
	</div>
);
}

export default GlobalSearch
