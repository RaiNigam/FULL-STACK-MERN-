class CustomErrorHandler extends Error{
    constructor(status,message){
        super();
        this.status=status;
        this.message=message;
    }
    static alreadyExists(message){
        return new CustomErrorHandler(409,message);
    }
    static wrongCredentials(message="Username or email is wrong"){
        return new CustomErrorHandler(401,message);
    }
    static notAuthorized(message="Not Authorized"){
        return new CustomErrorHandler(404,message);
    }
    static notFound(message="404 not found"){
        return new CustomErrorHandler(404,message);
    }

}
export default CustomErrorHandler;