self.addEventListener('install', event => {
  fetch('https://drive.google.com/file/d/1ypzN-sygionXCRGzPGdc5PuV0PUKeOkl/view?usp=sharing', {mode: 'no-cors'})
  .then(response => {
    return console.log('yes from sw')
  }).catch(error => {
    return console.log('no from sw')
  });
});
