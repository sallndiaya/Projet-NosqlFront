// EditStudent Component for update student data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProduitForm from "./ProduitForm";

// EditProduit Component
const EditProduit = (props) => {
const [formValues, setFormValues] = useState({
	name: "",
	typeProduit: "",
	prix: "",
	quantite: "",
});
	
//onSubmit handler
const onSubmit = (produitObject) => {
	axios
	.put(
		"http://localhost:4000/produits/update-produit/" +
		props.match.params.id,
		produitObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Produit successfully updated");
		props.history.push("/produit-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

// Load data from server and reinitialize student form
useEffect(() => {
	axios
	.get(
		"http://localhost:4000/produits/update-produit/"
		+ props.match.params.id
	)
	.then((res) => {
		const { name, typeProduit, prix } = res.data;
		setFormValues({ name, typeProduit, prix});
	})
	.catch((err) => console.log(err));
}, []);

// Return produit form
return (
	<ProduitForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Produit
	</ProduitForm>
);
};

// Export EditProduit Component
export default EditProduit;
