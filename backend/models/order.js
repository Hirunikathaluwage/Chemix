import mongoose from mongoose

const orderItems = new mongoose.Schema({
    medicine: {
        type:mongoose.Schema.Types.objectId,
        ref:"Medicine",
        required : true
    },
    

})

const order = orderItems
export default order;
