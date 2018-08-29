const NUMBER_OF_WORKERS = 10;
let done = false;

function spawnWorker(index) {
	if (index == NUMBER_OF_WORKERS) {
    done = true;
    document.getElementById('counter').innerHTML = 'Done';
		return;
	}
  let worker = new Worker('worker.js');
  worker.postMessage(id);
  document.getElementById('counter').innerHTML =
      'Spawned ' + id + ' workers.';
  worker.onmessage = function(e) {
    spawnWorker(index + 1);
  }
}
