console.log('DOM');

const buttonSettings = {
  attr: {
    className: 'btn',
    title: 'super button',
  },
  css: {
    border: '1px solid #336699',
    padding: '5px 20px',
    color: '#444',
  },
  text: 'Click me!',
};

// create button
const parentButtonEl = document.querySelector('.parent-for-button');
const buttonEl = document.createElement('button');
parentButtonEl.appendChild(buttonEl);

for (const key in buttonSettings.attr) {
  const value = buttonSettings.attr[key];
  buttonEl[key] = value;
}

for (const key in buttonSettings.css) {
  const value = buttonSettings.css[key];
  buttonEl.style[key] = value;
}

buttonEl.innerText = buttonSettings.text;
