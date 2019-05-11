import React, { Component } from 'react';
import '../../Theme/bootstrap.css';
import Loading from '../../components/loading/loading';
import ProductListing from '../../components/product/product-listing';
import Pagination from '../../components/pagination/pagination';
const API = require('../../API/API');

class Home extends Component {
    state = {
        products: null,
        currentPage: 1,
        productsPerPage: 9
    };

    // componentDidMount
    async componentDidMount() {
        try {
            // Getting all products
            const products = await API.getAllProducts();
            // Rendering the products in the page
            this.setState({
                ...this.state,
                products: products,
            });
        } catch (error) {
            this.props.history.push('/error');
        }
    };

    // currentPageHandler
    currentPageHandler = (id) => {
        this.setState({ currentPage: id })
    };

    // editHandler
    editHandler = (id) => {
        // Open Edit page
        this.props.history.push(`/edit/${id}`);
    };


    render() {

        // Handling the display logic
        // Loading
        let view = <Loading />;

        // After loading
        if (this.state.products) {
            // Extracting 9 products to be displayed
            const { products, currentPage, productsPerPage } = this.state;
            const indexOfLastProduct = currentPage * productsPerPage;
            const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
            const productsToBeDisplayed = products.slice(indexOfFirstProduct, indexOfLastProduct);
            // Setting the view
            view = <div>
                <ProductListing
                    products={productsToBeDisplayed}
                    editHandler={this.editHandler}
                />
                <div style={{ float: "right" }}>
                    <Pagination
                        productsPerPage={this.state.productsPerPage}
                        currentPage={this.state.currentPage}
                        productsLength={this.state.products.length}
                        currentPageHandler={this.currentPageHandler}
                    />
                </div>
            </div>
        };

        return (
            <div>
                <div style={{ paddingTop: "1rem" }}>
                    <h1>Home</h1>
                    <hr className="my-4" />
                </div>
                {view}
            </div>
        );
    };
};

export default Home;