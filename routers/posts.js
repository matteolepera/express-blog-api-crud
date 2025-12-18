import express from "express";
import postController from "../controllers/postController.js"

const router = express.Router();

//INDEX
router.get("/", (postController.index))
//SHOW
router.get("/:id", (postController.show))
//STORE
router.post("/", (postController.store))
//UPDATE
router.put("/:id", (req, res) => {
    res.send("Modifica una vittoria ferrari")
})
//MODIFY
router.patch("/:id", (req, res) => {
    res.send("Modifica dettagli di una vittoria ferrari")
})
//DESTROY
router.delete("/:id", (req, res) => {
    res.send("Elimina una vittoria ferrari")
})


export default router;