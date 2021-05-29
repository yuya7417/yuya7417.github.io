'use strict'

{

  const open = document.getElementById('open');
  const spmenu = document.querySelector('.sp-menu');
  const close = document.getElementById('close');
  const list = document.querySelector('.list');


  open.addEventListener('click', () => {
    spmenu.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    spmenu.classList.remove('show');
    open.classList.remove('hide');
  });

  list.addEventListener('click', () => {
    spmenu.classList.remove('show');
    open.classList.remove('hide');
  });

}