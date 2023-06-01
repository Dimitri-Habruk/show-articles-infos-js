const tousLesArticles = document.querySelector('div.l-productgrid__wrapper').querySelectorAll('li');

let counter = 1;

const afficherInfosArticle = (article) => {
  const nom = article.querySelector('.c-product__name');
  const prix = article.querySelector('.c-price__value--current');

  if (nom && prix) {
    console.log("№ " + counter + " Nom: " + nom.innerText + " Prix: " + prix.innerText);
    counter++;
  }
};


if (tousLesArticles) {
  const observerCallback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (node instanceof HTMLElement && node.tagName === 'LI') {
            afficherInfosArticle(node);
          }
        });
      }
    }
  };

  const observer = new MutationObserver(observerCallback);

  observer.observe(tousLesArticles[0].parentNode, { childList: true });

  tousLesArticles.forEach(li => {
    afficherInfosArticle(li);
  });
} else {
  console.error("article n'existe pas");
}
