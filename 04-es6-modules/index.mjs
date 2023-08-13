import { season, temperature } from "./named-exports.mjs";
import { isRaining, humidity } from "./inline-exports.mjs";
import getDataFromServer from "./default-export.mjs";
import DEFAULT_SERVER, {
    USERNAME as MY_USERNAME,
    PASSWORD as MY_PASSWORD
} from "./mixed-exports.mjs";

// Start module
console.log('');
console.log('');

// Import form the ./named-exports.mjs module
console.log(`Season:      ${season}`);
console.log(`Temperature: ${temperature}`);

// Import form the ./inline-exports.mjs module
console.log(`Rain:        ${isRaining}`)
console.log(`Humidity:    ${humidity}`)
console.log('');

// Import function from the default-export.mjs module
getDataFromServer('https://jsonplaceholder.typicode.com/posts/42')
    .then((post) => console.log(post))
    .catch((err) => console.error(err))

// Import form the mixed-exports.mjs module
console.log('========================');
console.log(`USERNAME: ${MY_USERNAME}`);
console.log(`PASSWORD: ${MY_PASSWORD}`);
console.log(`SERVER:   ${DEFAULT_SERVER}`);
console.log('========================');
console.log('');
