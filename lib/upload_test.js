require('dotenv').config()
//  Require File system
const fs = require('fs')

// Require AWS
const mime = require('mime-types')
// Require AWS SDK
const AWS = require('aws-sdk')

// SET THE ORIGIN

AWS.config.update({ region: 'us-east-1'});

// create s3 = new aws.s3
const s3 = new AWS.S3()
console.log(s3)

// Access command line argument to get file path
const filePath = process.argv[2]

//


const bucketName = process.env.BUCKET_NAME
console.log(bucketName)

//
fs.readFile(filePath, (err, fileData) => {
  if (err) throw err
  console.log(fileData)

  // create params object for s3 upload
  const params = {
    Bucket: bucketName,
    Key: 'something',
    Body: fileData,
    ACL: 'public-read',
    ContentType:mime.lookup(filePath)
  }

  // upload to s3

  s3.upload(params, (err, s3Data) => {
    if (err) throw err
    console.log(s3Data)
  })

})
