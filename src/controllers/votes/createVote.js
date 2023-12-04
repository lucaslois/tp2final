import Vote from "../../models/vote.model.js"

export const createVote = async (req, res) => {
    const {candidate, zone} = req.body

    console.log(candidate)

    const vote = await Vote.create({
        candidate,
        zone
    })

    res.status(201).json({success: true})
}