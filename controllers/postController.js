import { error } from "node:console";
import { ferrariWins } from "../data.js";
import { parse } from "node:path";

//INDEX
function index(req, res) {
    const response = {
        info: {
            totalWins: ferrariWins.length,
            leclerWins: driverTotalWin("Leclerc"),
            sainzWins: driverTotalWin("Sainz"),
        },
        results: ferrariWins,
    }

    res.json(response);
}

//SHOW

function show(req, res) {
    const id = parseInt(req.params.id);
    const win = (ferrariWins.find(win => win.id === id))
    if (win !== undefined) {
        res.json(win);
    } else {
        res.status(404)
        res.json({
            error: "Not found",
            message: "Vittoria inesistente",
        })
    }

}

//STORE
function store(req, res) {
    res.send("Aggiungi una vittoria ferrari")
}
//UPDATE

function update(req, res) {
    res.send("Modifica una vittoria ferrari")
}

//MODIFY
function modify(req, res) {
    res.send("Modifica dettagli di una vittoria ferrari")
}
//DESTROY
function destroy(req, res) {
    const id = parseInt(req.params.id)
    const index = (ferrariWins.findIndex(win => win.id === id))
    ferrariWins.splice(index, 1)
    res.send(index)
}

//OTHER FUNCTION
function driverTotalWin(name) {
    let count = 0;
    ferrariWins.forEach(win => {
        win.tags.forEach(tag => {
            if (tag === name) {
                count++;
            }
        })
    })
    return count;
}


const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy,
}

export default controller;