const paragrafos = document.querySelector('.paragrafos');
const paragrafosTags = paragrafos.querySelectorAll('p');
const title = document.querySelector('h1');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
const estilosContainer = getComputedStyle(document.querySelector('.container'));
const backgroundColorContainer = estilosContainer.backgroundColor;

title.style.textAlign = 'center';

for (let p of paragrafosTags) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = backgroundColorContainer;
    p.style.borderRadius = '15px';
    p.style.padding = '10px';
}