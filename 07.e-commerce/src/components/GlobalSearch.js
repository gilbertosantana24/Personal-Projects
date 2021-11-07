import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './globalsearch.css';
import { useHistory } from "react-router";


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
