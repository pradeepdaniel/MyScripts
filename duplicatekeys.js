var obj = {};

// Add a new property to the object, but only if the key is not already in the object.
function addProperty(obj, key, value) {
  if (!Object.keys(obj).includes(key)) {
    obj[key] = value;
  }
}

addProperty(obj, 'key1', 'value1');
addProperty(obj, 'key2', 'value2');
addProperty(obj, 'key1', 'value3');

console.log(obj); // { key1: 'value1', key2: 'value2' }
