const AWS = require('aws-sdk');

exports.handler = async (event, context, callback) => {
    try {
        console.log('eventBody:', event);
        const s3 = new AWS.S3({httpOptions: { timeout: 2000 }});
        var params = {
            Bucket: 'sysoutprint',
            Key: 'pet.jpeg',
        };
        console.log('getting s3 promise!')
        await s3.getObject(params, (err, data)=> {
            if (err) {
                callback(err);
            } else {
                let response = {
                    statusCode: 200,
                    headers: {
                        "Content-type": "image/jpeg",
                    },
                    "body": data.toString('base64'),
                    "isBase64Encoded": false,
                };
                context.succeed(response);
                callback(null, response);
            }
       }).promise();
        console.log('done')
    } catch (e) {
        console.log('Error caught:', e);
        callback(e);
    }
    console.log('exited')
};
