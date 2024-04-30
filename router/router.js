const express = require("express");
const router = express.Router();
const {
    createUser,
    listUser,
    searchUserById,
    updateUserById,
    deleteUserById
} = require('../controllers/usuarios')

router.post('/usuarios', createUser);
router.get('/usuarios', listUser);
router.get('/usuarios/:id', searchUserById);
router.put('/usuarios/:id', updateUserById);
router.delete('/usuarios/:id', deleteUserById);

module.exports = router;