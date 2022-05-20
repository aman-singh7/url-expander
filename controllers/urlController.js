const urlController = {
    async expand(req, res, next) {
        // Validating base url
        // Validating short url
        // Check if the short url already exists in the database
        // If exists return the long url
        // Else generate the long code
    },

    async custom(req, res, next) {
        // check if custom code already exists
        // else set the new custom code
            
    },

    async open(req, res, next) {
        // Validate the url and redirect
    }
};

export default urlController;