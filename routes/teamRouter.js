const express = require("express")
const teamRouter = express.Router()
const Team = require("../models/team.js")

//get all teams
teamRouter.get("/", (req, res, next) => {
    Team.find((err, teams) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(teams)
    })
})
// post a team
teamRouter.post("/", (req, res, next) => {
    const newTeam = new Team(req.body)
    newTeam.save((err, savedTeam) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedTeam)
    })
})
module.exports = teamRouter