
const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = mongoose.ypes;

const BoardSchema = new Schema(
  {
    name: {type: String},
    workflow: {type: ObjectId, ref: 'workflow'},
    issue: [{type: ObjectId, ref: 'issues'}],
    sequence: {type: Number}, // 1 2 3 4 5 6
  },
  {
    collection: 'boards',
    timestamps: true,
  },
);

const BoardModel = mongoose.model("Board", BoardSchema);

export default BoardModel;