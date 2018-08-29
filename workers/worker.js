
const targetBytes = 50 * 1024 * 1024; // 50MB
let garbageBytes = 0;
let garbage = [];

function generateGarbage() {
  const arrayLength = 1000;
  const bytesPerElement = 8;
  const bytesPerArray = arrayLength * bytesPerElement;
  let array = new Array(arrayLength);
  for (let j = 0; j < array.length; j++) {
    array[j] = 1.0 / (generated + j + 1);
  }
  garbage.push(array);
  garbageBytes += bytesPerArray;
  if (garbageBytes < targetBytes) {
    setTimeout(generateGarbage, 10);
  } else {
    postMessage("done");
  }
}

onmessage = function(args) {
  setTimeout(generateGarbage, 10);
}
