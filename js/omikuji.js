'use strict'

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results =['大吉','中吉','凶'];
    const n = Math.floor(Math.random() * results.length);
    btn.textContent = results[n];
  });


}