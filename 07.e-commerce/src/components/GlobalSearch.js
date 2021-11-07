import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Autocomplete, createFilterOptions } from '@material-ui/lab';
import './globalsearch.css';
import { useHistory } from "react-router";

const OPTIONS_LIMIT = 5;
const defaultFilterOptions = createFilterOptions();
const filterOptions = (options, state) => {
  return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
};

const GlobalSearch = (props) => {
	const history = useHistory();

	const handleClick = (value) => {
		if (value !== null) {
			history.push(`/${value._id}`);
		}
	};

	return (

		<div className="combobox" >

			<Autocomplete
				filterOptions={filterOptions}
				options={props.items}
				getOptionLabel={(option) => option.product_name}
				clearOnEscape={true}
				onChange={ (event,value) => handleClick(value) }
				renderInput={(params) =>
					<TextField {...params} placeholder="Search Items" />}

			/>


		</div>
	);
}

export default GlobalSearch
