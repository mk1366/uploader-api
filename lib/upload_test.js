require('dotenv').config()
//  Require File system
const fs = require('fs')
// Require AWS SDK
const AWS = require('aws-sdk')

// SET THE ORIGIN

AWS.config.update({ region: 'REGION'});

// create s3 = new aws.s3
const s3 = new AWS.S3()
console.log(s3)

// Access command line argument to get file path
const filePath = process.argv[2]

//


const bucketName = process.env.BUCKET_NAME
console.log(bucketName)

//
fs.readFile(filePath, (err, data) => {
  if (err) throw err
  console.log(data)
})
