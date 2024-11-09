function currentDate() {
    var today = Date(Date.now());
    return(today.toString());
}

module.exports = { currentDate };