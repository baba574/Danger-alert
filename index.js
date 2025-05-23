require('dotenv').config();
const { analyseMatches } = require('./helpers/matchAnalyzer');
const cron = require('node-cron');

cron.schedule('*/2 * * * *', async () => {
    console.log("Analyse en cours...");
    await analyseMatches();
});