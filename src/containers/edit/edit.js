import React, { Component } from 'react';
import Loading from '../../components/loading/loading';
import InputField from '../../components/input-field/input-field';
import '../../Theme/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const API = require('../../API/API');
const validateProduct = require('../../utilities/validation/product-validation/product-validation');

class Edit extends Component {
    state = {
        formData: {
            imgUrl: {
                value: null,
                isValid: true
            },
            name: {
                value: null,
                isValid: true
            },
            price: {
                value: null,
                isValid: true
            },
            companyName: {
                value: null,
                isValid: true
            }
        },
        loading: true,
        submitting: false
    };

    // componentDidMount
    async componentDidMount() {
        try {
            // Getting the product
            const product = await API.getProductById(this.props.match.params.id);
            // Deleting product id
            delete product.id;
            // Setting the state to pre-populate the form with data
            const obj = {
                loading: false,
                submitting: false,
                formData: {}
            };
            for (let key in product) {
                obj.formData[key] = {
                    value: product[key],
                    isValid: true
                };
            };
            this.setState(obj);
        } catch (error) {
            this.props.history.push('/error');
        };
    };

    // onChangeHandler
    onChangeHandler = (id, value) => {
        let formData = { ...this.state.formData }
        // Binding value
        formData[id].value = value;
        // Validating value
        formData[id].isValid = validateProduct(id, value);
        this.setState({
            ...this.state,
            formData
        });
    };

    // backToHomeHandler
    backToHomeHandler = () => {
        this.props.history.push('/');
    };

    // onResetHandler
    onResetHandler = () => {
        const obj = {
            loading: false,
            submitting: false,
            formData: {},
        };
        for (let key in this.state.formData) {
            obj.formData[key] = {
                value: '',
                isValid: false
            };
        };
        this.setState(obj);
    };

    // onSubmitHandler
    onSubmitHandler = async () => {
        // Checking if any field is invalid
        let validationArr = [];
        for (let key in this.state.formData) {
            let isValid = this.state.formData[key].isValid;
            validationArr.push(isValid)
        };
        if (validationArr.indexOf(false) === -1) {
            // Animating the submission button
            this.setState({
                ...this.state,
                submitting: true
            });
            // Extracting the product
            let product = {};
            for (let key in this.state.formData) {
                product[key] = this.state.formData[key].value
            };
            // Sending request
            try {
                await API.editProduct(this.props.match.params.id, product);
                this.props.history.push('/');
            } catch (error) {
                this.props.history.push('/error');
                console.log(error);
            }
        };
    };


    render() {
        // Loading
        let view = <Loading />
        // After Loading
        if (!this.state.loading) {
            // Rendering the fields dynamically
            let keysArr = [];
            for (let key in this.state.formData) {
                keysArr.push(key);
            };
            let form = keysArr.map(key => <InputField
                id={key}
                value={this.state.formData[key].value}
                checkBool={this.state.formData[key].isValid}
                onChangeHandler={this.onChangeHandler}
            />);
            // Setting the view
            view = <>
                {form}
                <div className="form-group">
                    <button style={{ marginRight: "0.2rem" }} className="btn btn-primary"
                        onClick={this.onSubmitHandler}>
                        {this.state.submitting ?
                            <FontAwesomeIcon className="fa-pulse" icon={faSpinner} />
                            : 'Submit'}
                    </button>
                    <button style={{ marginRight: "0.2rem" }} className="btn btn-secondary" onClick={this.onResetHandler}>Reset</button>
                    <button style={{ marginRight: "0.2rem" }} className="btn btn-secondary" onClick={this.backToHomeHandler}>Back to Home</button>
                </div>
            </>
        };

        return (
            <div>
                <div style={{ paddingTop: "1rem" }}>
                    <h1>Edit</h1>
                    <hr className="my-4" />
                </div>
                <div>
                    {view}
                </div>
            </div>
        );
    };
};

export default Edit;