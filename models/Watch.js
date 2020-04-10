const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const watchSchema = new Schema(
  {
    // unless you are defining more than the "type" property, you don't have to use {} (see below)
    // firstName: {type: String, require: true}
    brand : String,
    model: String,
    material: String,
    description: String,
    price: Number,
    pictureUrl: String,
    stock: { type: Schema.Types.ObjectId, ref: 'Stock' },
  },
  {
    // keeps record when is created and updated
    timestamps: true
  }
);

// const Watch = model('Watch', watchSchema);
// module.exports = Watch;

module.exports = model('Watch', watchSchema);
