function repeatOperation(callback, interval) {
    const timerId = setInterval(callback, interval);   
    return timerId;
}

repeatOperation(() => {console.log("out")}, 1000)