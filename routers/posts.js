import express from "express";
import postController from "../controllers/postController.js"

const router = express.Router();

//INDEX
router.get("/", (postController.index))
//SHOW
router.get("/:id", (req, res) => {
    // const id = parseInt(req.params.id);
    // const response = (ferrariWins.find(win => win.id === id))
    // res.json(response);
})
//STORE
router.post("/", (req, res) => {
    res.send("Aggiungi una vittoria ferrari")
})
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