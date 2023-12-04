import { config } from "../../config.js";
import Vote from "../../models/vote.model.js"

export const getVotes = async (req, res) => {
    const votes = await Vote.findAll();

    const groupedVotes = Object.fromEntries(config.candidates.map(candidate => [candidate, 0]))
    votes.forEach(vote => {
        if(groupedVotes[vote.candidate] === undefined) groupedVotes[vote.candidate] = 0

        groupedVotes[vote.candidate]++
    })

    res.status(200).json({
        success: true,
        data: groupedVotes
    })
}