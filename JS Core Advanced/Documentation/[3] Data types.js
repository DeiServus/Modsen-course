function checkObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length)
        return false;

    for (let key of keys1) {
        const val1 = obj1[key];
        const val2 = obj2[key];
        
        if (val1 !== val2)
            return false;
    }

    return true;
}

const obj1 = { key1: "value1", key2: 3 }
const obj2 = { key1: "value1" }
const obj3 = { key1: "value1", key2: 5 }

console.log(checkObjects(obj1, obj1));
console.log(checkObjects(obj1, obj2));
console.log(checkObjects(obj1, obj3));