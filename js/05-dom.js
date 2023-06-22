const title = document.createElement('h2');
title.textContent = 'Page Title (came from JS)';
console.log(title);

// https://nastol.net/wallpaper/middle/107/gory-nebo-leto-priroda.jpg
const imgEl = document.createElement('img');
// imgEl.src = 'https://cs6.pikabu.ru/video/2015/05/07/11/og_1431023092_834.jpg';
imgEl.src =
  'https://nastol.net/wallpaper/middle/107/gory-nebo-leto-priroda.jpg';
console.log(imgEl);
imgEl.width = 320;

const divToInsert = document.querySelector('.dom-js5');

title.append(imgEl);

divToInsert.append(title);

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

const colorPickerContainerEl = document.querySelector('.js-color-picker');

const createColorPickerOptions = options => {
  return options.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.classList.add('color-picker__option');
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;

    return buttonEl;
  });
};

const elements = createColorPickerOptions(colorPickerOptions);
console.dir(elements);

colorPickerContainerEl.append(...elements);

colorPickerContainerEl.addEventListener('click', e => {
  console.log(e.target.nodeName);
  if (e.target.nodeName !== 'BUTTON') {
    return;
  } else colorPickerContainerEl.append(e.target.textContent, ' ');
});
