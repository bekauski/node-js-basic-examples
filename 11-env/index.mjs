import { config } from "dotenv";
config();

// // Imports entire module including default export
// import * as dotenv from 'dotenv';
// dotenv.config();

console.log('\n','\n', config());
console.log('\nUsername:', process.env.DB_USERNAME);
console.log('Password:', process.env.DB_PASSWORD);
console.log('Database:', process.env.DB_URL);