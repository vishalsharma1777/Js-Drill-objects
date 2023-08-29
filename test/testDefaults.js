import { defaults } from "../defaults.js";

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham', salary : undefined };

const defaultProperties = { age: 30, occupation: 'Businessman', salary:15 };

const answer = defaults(testObject,defaultProperties);

console.log(answer);

