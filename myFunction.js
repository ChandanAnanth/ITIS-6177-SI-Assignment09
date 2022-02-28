exports.handler = async (event) => {
    // TODO implement
    const msg = "Chandan Ananth says " + event["queryStringParameters"]["keyword"]
    const response = {
        statusCode: 200,
        body: msg
    };
    return response;
};
