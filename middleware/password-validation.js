const passwordSchema = require('../models/password');

module.exports = (req, res, next) => {
    if (!passwordSchema.validate(req.body.password)) {
        res.status(400).json({ message: 'Veuillez choisir un mot de passe avec au minimum 8 caractères, 2 chiffres, 1 majuscule, 1 minuscule et sans aucun espace' });
    } else {
        next();
    }
};