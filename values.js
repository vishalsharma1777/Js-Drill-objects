function values(obj) {
    const values = [];
    for (let prop in obj) {
        if (typeof obj[prop] !== "function") {
            values.push(obj[prop])
        } 
    }
    return values;
}
export { values }