require('dotenv').config()

const mime = require('mime-types')
// Require AWS SDK
const AWS = require('aws-sdk')

const bucketName = process.env.BUCKET_NAME

module.export = function()
const params = {
  Bucket: bucketName,
  Key: 'something',
  Body: fileData,
  ACL: 'public-read',
  ContentType:mime.lookup(filePath)
}


// SET THE ORIGIN

AWS.config.update({ region: 'us-east-1'});

// create s3 = new aws.s3
const s3 = new AWS.S3()



// upload to s3

s3.upload(params, (err, s3Data) => {
  if (err) throw err
  console.log(s3Data)
})
