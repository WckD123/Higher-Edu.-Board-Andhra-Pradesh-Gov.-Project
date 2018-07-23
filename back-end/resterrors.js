function errorResponse(code, server_error="") {
    var type = "UnkownException"
    var msg = "No message"
    internal_error_code = 5000
    switch(code) {
        case 401:
            type = "AuthorizationException"
            msg = "No auth token provided"
            internal_error_code = 4001
            break
        case 402:
            type = "BadRequestException"
            msg = "Please check the url and parameters passed"
            internal_error_code = 4002
            break
        case 501:
            type = "DatabaseException"
            msg = "Database Operation failed. Please check if valid parameters were passed" 
            internal_error_code = 5001
            break  
        case 500:
            type = "ServerException"
            msg = "Failed to authenticate token"
            internal_error_code = 5000
            break         
    }
    return {"internal_error_code":internal_error_code,"type":type, "msg":msg, "server_error_description" : server_error};
}
module.exports = errorResponse;