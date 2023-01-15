// CreateStudent Component for add new student

// Import Modules
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProduitForm from "./ProduitForm";

// CreateProduit Component
const CreateProduit = () => {
const [formValues, setFormValues] =
	useState({ name: '', typeProduit: '', prix: '' , quantite: ''})
// onSubmit handler
const onSubmit = produitObject => {
	axios.post(
'https://api-rest-produit.onrender.com/produits/create-produit',
	produitObject)
	.then(res => {
		if (res.status === 200)
		alert('Produit successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
// Return produit form
return(
	<ProduitForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create produit
	</ProduitForm>
)
}

// Export CreateProduit Component
export default CreateProduit
