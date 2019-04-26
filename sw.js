self.addEventListener('install', event => {
  fetch('http://0.0.0.0:8000/last.json', {mode: 'no-cors'})
  .then(response => {
    return console.log('yes from sw')
  }).catch(error => {
    return console.log('no from sw')
  });
}