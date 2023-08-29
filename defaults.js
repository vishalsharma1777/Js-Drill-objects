function defaults(obj, defaultProps) {
    for (const [key, value] of Object.entries(defaultProps)) {
        if (!(key in obj) || obj[key] === undefined) {
            obj[key] = value;
        }
    }
    return obj;
}

export {defaults}