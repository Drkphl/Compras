import Compras from '../models/Compras_model.js';

export const store = async (req, res) => {
    try {
        const content = await Compras.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Compras.find(req.query).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error);
    }
};
