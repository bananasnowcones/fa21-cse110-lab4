
function timothy() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
console.log(setInterval(timothy, 1000));