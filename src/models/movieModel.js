const mongoose = require("mongoose");

const movieSchema = mongoose.Schema ({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  year: {
    type: String,
    unique: true,
  },
});

module.exports = mongoose.model("Movie", movieSchema);