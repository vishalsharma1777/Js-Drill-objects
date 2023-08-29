function invert(obj) {
    const inverted = {}
    for (let key in obj) {
        inverted[obj[key]] = key;
    };
    return inverted;
  }

export {invert}