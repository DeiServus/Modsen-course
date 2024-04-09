function seriesAsyncOperations(operations) {
    return operations.reduce((promiseChain, currentOperation) => {
        return promiseChain.then(() => {
            return new Promise((resolve, reject) => {
                currentOperation()
                    .then(resolve)
                    .catch(reject);
            });
        });
    }, Promise.resolve());
}

function asyncOperation1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Операция 1');
            resolve();
        }, 500);
    });
}
  
function asyncOperation2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Операция 2');
            resolve();
        }, 1000);
    });
}

seriesAsyncOperations([asyncOperation1, asyncOperation2]).then(() => {console.log("End")})