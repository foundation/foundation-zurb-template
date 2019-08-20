// counter for index, discard if you like
var indexContainer = document.querySelector('.index-layout');
var indexItemCount = document.querySelector('[data-index-count]');

if (indexContainer) {
  var numberResult = indexContainer.childElementCount;
  indexItemCount.innerHTML = numberResult - 1;
}
