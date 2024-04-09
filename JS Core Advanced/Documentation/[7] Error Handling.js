function validateInteger(number) {
    if (!Number.isInteger(number)) {
       throw new Error('Invalid number');
    }
    return number;
}

validateInteger(1.1);