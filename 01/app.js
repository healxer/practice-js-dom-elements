console.log('DOM');

const commentItem = document.querySelector(
  '.comments__item.comments__item--newest'
);

if (commentItem) {
  const dataInfoItems = commentItem.querySelectorAll('[data-info]');

  console.log(`Znaleziono ${dataInfoItems.length} elementy.`);
}
