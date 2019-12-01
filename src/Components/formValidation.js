export const formValidation = ({ form, formErrors }) => {
    let valid = true;

    Object.values(formErrors).forEach(value => {
        value.length > 0 && (valid = false)
    });

    Object.values(form).forEach(value => {
        value === null && (valid = false)
    })

    return valid
}

export const emailRegex = RegExp( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
