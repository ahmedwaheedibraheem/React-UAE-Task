import React from 'react';
import '../../Theme/bootstrap.css';

const productCard = (props) => {
    return (
        <div style={{ width: "32.5%", minWidth: "250px" }} className="card mb-3">
            <h6 className="card-header">{props.product.name}</h6>
            <div style={{ padding: "1rem", textAlign: "center" }} className="cardBody">
                <img style={{ height: "200px" }} src={props.product.imgUrl} alt="Product" />
            </div>
            <div className="card-body">
                <h5 className="card-title"><strong>Price [EGP]:</strong>&nbsp;{props.product.price}</h5>
                <h6 className="card-subtitle text-muted"><strong>Producer</strong>&nbsp;{props.product.companyName}</h6>
            </div>
            <div className="card-body" style={{ textAlign: "right" }}>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <button className="btn btn-outline-primary"
                        onClick={() => props.editHandler(props.product.id)}>Edit</button>
                </div>
            </div>
        </div>
    );
};

export default productCard;