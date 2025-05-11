// const https = require('https');
// const Readline = require('readline');
// const chalk = require('chalk');
// const { readlink } = require('fs');

// const rl = Readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const apiKey = '0d8fdae2f753ee26af1b0229';
// const url = `https://v6.exchangerate-api.com/v6/0d8fdae2f753ee26af1b0229/latest/USD`;

// const convertCurrency = (amount, rate) => {
//     return (amount * rate).toFixed(2);
// };

// https.get(url, (response) => {
//     let data = ''; // Initialize the data variable

//     response.on('data', (chunk) => {
//         data += chunk;
//     });

//     response.on('end', () => {
//         const rates = JSON.parse(data).conversion_rates;

//         rl.question('Enter the amount in USD: ', (amount) => {
//             rl.question('Enter the target currency (e.g., INR, EUR, NPR): ', (currency) => {
//                 const rate = rates[currency.toUpperCase()];
//                 if (rate) {
//                     console.log(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`);
//                 } else {
//                     console.log(`Invalid currency code`);
//                 }
//                 rl.close();
//             });
//         });
//     });
// });
import https from 'https';
import readline from 'readline';
import chalk from 'chalk';
import { readlink } from 'fs';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const apiKey = '0d8fdae2f753ee26af1b0229';
const url = `https://v6.exchangerate-api.com/v6/0d8fdae2f753ee26af1b0229/latest/USD`;

const convertCurrency = (amount, rate) => {
    return (amount * rate).toFixed(2);
};

https.get(url, (response) => {
    let data = ''; // Initialize the data variable

    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        const rates = JSON.parse(data).conversion_rates;

        rl.question('Enter the amount in USD: ', (amount) => {
            rl.question('Enter the target currency (e.g., INR, EUR, NPR): ', (currency) => {
                const rate = rates[currency.toUpperCase()];
                if (rate) {
                    console.log(chalk.green(`${amount} USD is approximately ${convertCurrency(amount, rate)} ${currency}`));
                } else {
                    console.log(chalk.red(`Invalid currency code`));
                }
                rl.close();
            });
        });
    });
});