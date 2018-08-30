let targetBytes;
let closeWorker;
let garbageBytes = 0;
let garbage = [];
let timerId = null;

function generateGarbage() {
  if (timerId) {
    clearTimeout(timerId);
  }
  const chunkBytes = 1024 * 1024;
  const arrayLength = 10000;
  const bytesPerElement = 8;
  const bytesPerArray = arrayLength * bytesPerElement;
  let generated = 0;
  while (generated < chunkBytes) {
    let array = new Array(arrayLength);
    for (let j = 0; j < array.length; j++) {
      array[j] = 1.0 / (garbageBytes + j + 1);
    }
    garbage.push(array);
    generated += bytesPerArray;
  }

  garbageBytes += generated;
  if (garbageBytes < targetBytes) {
    timerId = setTimeout(generateGarbage, 10);
  } else {
    postMessage("done");
    if (closeWorker) {
      close();
    }
  }
}

onmessage = function(args) {
  targetBytes = args.data.allocationsPerWorker;
  closeWorker = args.data.closeWorker;
  setTimeout(generateGarbage, 10);
}
