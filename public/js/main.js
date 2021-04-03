const url = new URL(window.location.href);
const buttons = document.querySelectorAll('.btn-pages');
let pageNumber = url.searchParams.get('pageNumber');
document.querySelectorAll('h3')[0].innerText = pageNumber ? pageNumber : 1;
buttons[0].addEventListener('click', () => {
  if (!pageNumber) {
    url.searchParams.set('pageNumber', 2);
    window.location.href = url.href;
  } else if (pageNumber > 1) {
    pageNumber--;
    url.searchParams.set('pageNumber', pageNumber);
    window.location.href = url.href;
  }
});
buttons[1].addEventListener('click', () => {
  pageNumber = pageNumber ? pageNumber++ : 2;
  // pageNumber++;
  url.searchParams.set('pageNumber', pageNumber);
  window.location.href = url.href;
});
