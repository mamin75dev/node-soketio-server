export function log(msg, ...arg) {
    // if(process.env.NOD)
    console.log("_Begin________________________________________: ", msg);
    for (let i in arg) {
        console.log(i);
    }
    console.log("_End________________________________________: ", msg);
}
