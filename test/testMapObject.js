import { mapObject,cb } from "../mapObject.js";
const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham'};

const answer = mapObject(testObject,cb);
console.log(answer);

