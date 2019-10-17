self.addEventListener('install', event => {
  fetch('https://doc-0o-4s-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/ojs5ksid31mfr00c8bbphdog87aee6v3/1556287200000/06347900622288115266/*/1ypzN-sygionXCRGzPGdc5PuV0PUKeOkl?e=download', {mode: 'no-cors'})
  .then(response => {
    return console.log('yes from sw')
  }).catch(error => {
    return console.log('no from sw')
  });
  try {
    console.log(performance.memory.usedJsHeapSize);
  } catch (e) {
    consoel.log(e);
  }
});
