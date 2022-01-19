
const  Validation = (values) => {

    let errors={};
    if(!values.user_name)
    {
        errors.user_name="Name is required!!"
    }

    if(!values.user_email){
        errors.user_email="Email is required!!"
    } else if(!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.user_email)){
        errors.user_email="Email is invalid!!"
    }
    
    if(!values.user_message)
    {
        errors.user_message="Message is required!!"
    }

    return errors;
}

export default Validation;
