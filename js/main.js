'use strict'

{

  const open = document.getElementById('open');
  const spmenu = document.querySelector('.sp-menu');
  const close = document.getElementById('close');


  open.addEventListener('click', () => {
    spmenu.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    spmenu.classList.remove('show');
    open.classList.remove('hide');
  })

}