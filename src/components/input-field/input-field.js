import React from 'react';
import '../../Theme/bootstrap.css';

const inputField = (props) => {

    // Handling label name
    let labelName;
    if (props.id == 'name') labelName = 'Name:';
    if (props.id == 'imgUrl') labelName = 'Image URL:';
    if (props.id == 'companyName') labelName = 'Company:';
    if (props.id == 'price') labelName = 'Price';

    return (
        <div className={props.checkBool ? "form-group" : "form-group has-danger"}>
            <label className="form-control-label">{labelName}</label>
            <input type="text"
                value={props.value}
                placeholder={labelName}
                className={props.checkBool ? "form-control" : "form-control is-invalid"}
                id={props.id}
                onChange={(e) => props.onChangeHandler(e.target.id, e.target.value)} />
        </div>
    );
};
export default inputField;