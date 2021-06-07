'use strict'

{

  const open = document.getElementById('open');
  const spmenu = document.querySelector('.sp-menu');
  const close = document.getElementById('close');
  
  const list1 = document.querySelector('.list1');
  const list2 = document.querySelector('.list2');
  const list3 = document.querySelector('.list3');
  const list4 = document.querySelector('.list4');

  open.addEventListener('click', () => {
    spmenu.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    spmenu.classList.remove('show');
    open.classList.remove('hide');
  });

  list1.addEventListener('click', () => {
    spmenu.classList.remove('show');
    open.classList.remove('hide');
  });
  list2.addEventListener('click', () => {
    spmenu.classList.remove('show');
    open.classList.remove('hide');
  });
  list3.addEventListener('click', () => {
    spmenu.classList.remove('show');
    open.classList.remove('hide');
  });
  list4.addEventListener('click', () => {
    spmenu.classList.remove('show');
    open.classList.remove('hide');
  });

}