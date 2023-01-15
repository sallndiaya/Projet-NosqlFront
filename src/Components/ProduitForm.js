import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const ProduitForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	typeProduit: Yup.string()
	//.typeProduit("You have enter an invalid type")
	.required("Required"),
	prix: Yup.number()
	.positive("Invalid roll prix")
	.integer("Invalid roll prix")
	.required("Required"),
	quantite: Yup.number()
	.positive("Invalid roll quatite")
	.integer("Invalid roll quantite")
	.required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<h6>Nom Produit</h6>
			<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
			name="name"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<h6>Type Produit</h6>

		<FormGroup>
			<Field name="typeProduit" type="text"
			
				className="form-control" />
			<ErrorMessage
			name="typeProduit"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<h6>Prix Produit</h6>
		<FormGroup>
			<Field name="prix" type="number"
				className="form-control" />
			<ErrorMessage
			name="prix"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<h6>Quantité Produit</h6>
		<FormGroup>
			<Field name="quantite" type="number"
				className="form-control" />
			<ErrorMessage
			name="quantite"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		<Button variant="primary" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default ProduitForm;
