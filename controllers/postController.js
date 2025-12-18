import { ferrariWins } from "../data.js";


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
}

export default controller;