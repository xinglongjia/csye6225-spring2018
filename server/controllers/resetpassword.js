var AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: 'AKIAJB57JPMPGKIQKB6A', 
    secretAccessKey: '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',
    region: 'us-east-1'
});

var sns = new AWS.SNS();

class ResetControllers {
    async publishsns(ctx, callback) {
    	const {
            user,
        } = ctx.request.body
        try{    
            var params = {
              Message: user, /* required */
              Subject: 'Passwrod Reset',
              TopicArn: 'arn:aws:sns:us-east-1:491833366348:password_reset'
            };
            var res = await sns.publish(params).promise();
            if(res) ctx.body="publish successfull!"
            console.log(res)
        } catch(err) {
            callback(err)
        }  

    }

}

export default new ResetControllers()
