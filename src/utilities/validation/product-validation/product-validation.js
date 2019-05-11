module.exports = (id, value) => {
    if (id == 'name' || id == 'companyName') {
        return (value != null && value != '' && value.length <= 50);
    };
    if (id == 'price') {
        return (!isNaN(value) && value != '');
    };
    if (id == 'imgURL') {
        return (value != null && value != '');
    };
};