'use strict'

{

  const open = document.getElementById('open');
  const spmenu = document.querySelector('.sp-menu');
  const close = document.getElementById('close');
  const list = document.querySelectorAll('.sp-menu a');

  open.addEventListener('click', () => {
    spmenu.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    spmenu.classList.remove('show');
    open.classList.remove('hide');
  });

  list.forEach((a) => {
    a.addEventListener('click', () => {
      spmenu.classList.remove('show');
      open.classList.remove('hide');
    })
  })

}
