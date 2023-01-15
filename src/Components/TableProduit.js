import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const TableProduit = (props) => {
const { _id, name, typeProduit, prix,quantite } = props.obj;

const deleteProduit = () => {
	axios
	.delete(
"https://api-rest-produit.onrender.com/produits/delete-produit/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Produit successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{typeProduit}</td>
	<td>{prix}</td>
	<td>{quantite}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-produit/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteProduit}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default TableProduit;
