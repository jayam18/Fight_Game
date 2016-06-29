/* eslint-disable func-names, no-param-reassign, consistent-return, no-underscore-dangle */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
  name: { type: String, required: true },
  attack: { type: Number, required: true, default: 2 },
  image: { type: String, required: true },
});



module.exports = mongoose.model('Weapon', weaponSchema);
