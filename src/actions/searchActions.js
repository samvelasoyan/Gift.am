export const searchAction = (value) => (dispatch, getState) => {
    const { products } = getState().search;
    let body = [];
    if (value !== "") {
        products.map((item) => {
            if (item.category.indexOf(value) !== -1) {
                return body.push(item);
            } else if (item.name.toLowerCase().indexOf(value) !== -1) {
                return body.push(item);
            } 
            const arr = item.tags.split(", ")
            arr.map(i => {
                if(i === value.toLowerCase()){
                    return body.push(item)
                } return null
            })
            return null;
        });
    }

    dispatch({ type: "SEARCH", payload: body, value: value });
};