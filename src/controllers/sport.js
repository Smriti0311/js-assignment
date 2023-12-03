const Sport = require('../models/sport');
const Match = require('../models/match');

const getAllSportsToursAndMatches = async () => {
    const matches = await Sport.getAllSportsToursAndMatches();
    console.log(matches);
    const res = {};
    matches.forEach(match => {
        const { sportName, tourName, matchName, matchId, startTime, format } = match;
        if (!res[sportName]) {
            res[sportName] = {};
        }
        if (!res[sportName][tourName]) {
            res[sportName][tourName] = [];
        }
        const matchDetails = {}
            matchDetails["matchName"] = matchName;
            matchDetails["matchId"] = matchId;
            matchDetails["startTime"] = startTime;
            matchDetails["format"] = format;
        res[sportName][tourName].push(matchDetails);
        
        
    });
    return res;
}

module.exports = {
    getAllSportsToursAndMatches: getAllSportsToursAndMatches
}