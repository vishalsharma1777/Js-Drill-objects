const cb = (x)=>{
    return ("mapping : " +x);
}

function mapObject(obj, cb) {
    const mapped = {};
    for(let prop in obj){
        mapped[prop] = cb(obj[prop])
    }
    return mapped
}



export {cb,mapObject}