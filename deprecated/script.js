function openLetter() {
  const envelope = document.querySelector('.envelope');
  const paper = document.getElementById('letterPaper');

  envelope.classList.add('flipped');

  setTimeout(() => {
    paper.classList.remove('hidden');
  }, 1000); // show paper after flip animation
}
