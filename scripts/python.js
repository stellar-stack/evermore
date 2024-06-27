let pyDoc = ``;
dataPy.forEach((data) => {
  pyDoc += `
    <div id="blog-post">
        <h1 class="blog-post-h1">${data.h1}</h1>
        <p class="blog-post-p">${data.p}</p>
      </div>`;
});

document.querySelector('.js-py-data').innerHTML = pyDoc;
