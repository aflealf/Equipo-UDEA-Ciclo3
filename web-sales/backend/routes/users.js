
const express = require("express");
const router = express.Router();

const UserController = require("../controllers/users");
const auth = require("../middleware/auth");

//router.get("", auth, UserController.getUsers);
router.get("", UserController.listUsers);
router.get("/:email", auth, UserController.getUser);

/** 
 * Rutas Post
 */
 //router.post("/update/:id", UserController.update);
 router.delete("/:id", UserController.delete);
 router.get("/:name", UserController.findProduct);
 //router.post("/", UserController.save);

module.exports = router;