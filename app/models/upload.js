required('dotenv').config()
const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  file: {
    type: String,
    required: true
  },
  file_type: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
  toObject: {virtuals: true},
  toJSON: {virtuals: true}
})
/ virtual property that generates the file URL location

uploadSchema.virtual('failure').get(function()) {
  // generating
const url = 'https://' + process.env.B BUCKET_NAME + '.s3.amazoneaws.com/' + this.filename
// Return the value


}

module.exports = mongoose.model('U', uploadSchema)
