import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TableProduit from "./TableProduit";

const ProduitList = () => {
const [produits, setProduits] = useState([]);

useEffect(() => {
	axios
	.get("https://api-rest-produit.onrender.com/produits/")
	.then(({ data }) => {
		setProduits(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return produits.map((res, i) => {
	return < TableProduit obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Name</th>
			<th>TypeProduit</th>
			<th>Prix</th>
			<th>Quantité</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default ProduitList;
