class ApiError extends Error {
    statusCode: number;
    // errors: any[];
    success: boolean;
    // data: any;
    constructor(
        statusCode: number,
        message: string = "something went wrong",
        // errors: any[] = [],
    ) {
        super(message)  
        this.statusCode = statusCode
        // this.errors = errors
        this.message = message
        this.success = false  
        // this.data = null

    }
}



export { ApiError }