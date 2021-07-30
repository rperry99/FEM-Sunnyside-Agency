const guideImage = document.getElementById('guide');
const contentTextDivs = document.querySelectorAll('.content-text');
console.log(guideImage.clientHeight);

function resizeContent() {
  let guideImageHeight = guideImage.offsetHeight;
  contentTextDivs.forEach((singleDiv) => {
    singleDiv.style.height = `${guideImageHeight}px`;
  });
}

resizeContent();
