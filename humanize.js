const humanizeDuration = require('humanize-duration');

const currentTime = new Date();

//Array times from now or dates to test
const timestamps = [
    new Date(currentTime.getTime() + 300000), //5 minutes
    new Date(currentTime.getTime() + 3600000), //1 hour
    new Date(currentTime.getTime() + 86400000), //1 day
    new Date('2023-10-06'), //Future date
    new Date('2023-10-06T10:15:00'), //Future date with time
];

//Options for humanizeDuration you want to test
//For other options see: https://www.npmjs.com/package/humanize-duration
const humanizeOptions = {
    largest: 2,
    round: true,
    units: ['d', 'h', 'm'],
    //Language and style
    delimeter: '',
    language: 'en',
    fallbacks: ['en', 'es'],
};

//Loop through the configured timestamps and log the duration for each one
for(const timestamp of timestamps) {
    const duration = humanizeDuration(timestamp - currentTime, humanizeOptions);
    console.log(`Duration: ${duration}`);
}