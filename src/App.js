//import logo from './logo.svg';
// Import React
import React from "react";
  
// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } 
        from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
  
// Import Custom CSS
import "./App.css";
  
// Import from react-router-dom
import { BrowserRouter as Router, Switch,
    Route, Link } from "react-router-dom";
  
// Import other React Component
import CreateProduit from 
    "./Components/create-produit.component";
import EditProduit from 
    "./Components/update-produit.component";
import  ProduitList from 
    "./Components/produit-list.component";
  
  
// App Component
const App = () => {
  
  return (
    <Router>
      
      <div className="App">
        <header className="App-header">
          
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-produit"} 
                  className="nav-link">
                  Gestion des produits
                  <div classeName="app">
      
      <img src={"https://media.istockphoto.com/id/1370669394/photo/different-hair-care-products-towel-and-brush-on-wooden-table-space-for-text.jpg?s=612x612&w=0&k=20&c=jwdj3ndxvIHdAfLuMhW3tvYLGZ3SkgQ2YEkxH_4f-T0="} alt="" />
    </div>
                </Link>
              </Navbar.Brand>
             
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-produit"} 
                    className="nav-link">
                    Créer Produit
                    <img src={"https://images.unsplash.com/photo-1671726203394-3fb856bdd8d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8cHJvZHVpdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" } alt=""/>
                  </Link>
                </Nav>
  
                <Nav>
                  <Link to={"/produit-list"} 
                    className="nav-link">
                    Lister Les produits
                    
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" 
                    component={CreateProduit} />
                  <Route path="/create-produit" 
                    component={CreateProduit} />
                  <Route path="/edit-produit/:id" 
                    component={EditProduit} />
                  <Route path="/produit-list" 
               component={ProduitList} />
                </Switch>
                <div classeName="app">
      <img src={"https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1aXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" } alt=""/>
      <img src={"https://media.istockphoto.com/id/1127827243/photo/woman-autumn-clothes-cosmetics-and-accessories-flat-lay-female-fall-fashion-concept-top-view.webp?s=612x612&w=is&k=20&c=cN883GyKinBxDmj97FjLzs8E-BZf63YPiq_ymYrLOH4="} alt="" />
      <img src={"https://media.istockphoto.com/id/1370669394/photo/different-hair-care-products-towel-and-brush-on-wooden-table-space-for-text.jpg?s=612x612&w=0&k=20&c=jwdj3ndxvIHdAfLuMhW3tvYLGZ3SkgQ2YEkxH_4f-T0="} alt="" />
    </div>
                
              </div>
            </Col>
          </Row>
          
        </Container>
        
      </div>
    </Router>
    
  );
  
};




export default App;
