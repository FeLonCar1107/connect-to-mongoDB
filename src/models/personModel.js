const mongoose = require('mongoose');
const personSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    lastname:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    contact:{
      type: Object,
      require: true,
        cellphone: {
          type: String,
          require: true
        },
        address: {
            city: {
              type: String,
              require: true
            },
            code_zip: {
              type: Number,
              require: true
            },
            geolocalitazion: [Number,Number]
        },
    },
    proffesion: {
      type: Object,
      require: true,
      name: {
        type: String,
        require: true
      },
      organization: {
        type: String,
        require: true
      },
      position_job: {
        type: String,
        require: true
      }
    }
})

module.exports = mongoose.model('personCollection', personSchema);