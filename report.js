const newman = require('newman');
require('dotenv').config();
//require('dotenv').config();

newman.run({
    //collection: require('./collection/dmoney.json'),
    collection: `https://api.postman.com/collections/25192567-425a5a82-a1ba-4eb7-a6b3-21315629b4c4?access_key=${process.env.access_key}`,
    //https://api.postman.com/collections/25192567-425a5a82-a1ba-4eb7-a6b3-21315629b4c4?access_key=
    //environment: require('./collection/env.json'),
    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './Report/report.html',
        }
    }
}, function (err) {
    if (err) {
        throw err;
    }
    console.log('collection run complete!');
});
//npm i newman-reporter-htmlextra