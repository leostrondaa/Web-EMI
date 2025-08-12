

const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

// Rotas específicas devem vir antes das rotas com parâmetros
router.get("/users/count", userController.getUsersCount);
router.get("/users/search", userController.searchUsers);
router.post("/users", userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUserById);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
