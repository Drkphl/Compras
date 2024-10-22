import db from '../config/db.js';

const comprasSchema = new db.Schema({
    product_name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    value: {
        type: Number,
        required: true,
    },
    expiration_date: {
        type: Date,
        required: false,
        default: '0000-00-00',
    },
});
const Compras = db.model('Compras', comprasSchema);

export default Compras;
