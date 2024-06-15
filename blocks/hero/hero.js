/* Hero core block */
export default function decorate(block) {
  [...block.children].forEach((heroItem) => {
    heroItem.classList.add('hero-item');

    // Replace 'p' with 'h1'
    const secondParagraph = heroItem.querySelector('p:nth-child(2)');
    if (secondParagraph) {
      const newHeading = document.createElement('h1');
      newHeading.innerHTML = secondParagraph.innerHTML;
      secondParagraph.parentNode.replaceChild(newHeading, secondParagraph);
      newHeading.classList.add('hero-title');
    }
    // Replace 'p' with 'div' and add a new class to the container
    const pictureContainer = heroItem.querySelector('picture');
    if (pictureContainer) {
      const imageParent = pictureContainer.parentNode; // picture parent

      const newDiv = document.createElement('div');
      newDiv.innerHTML = imageParent.innerHTML;
      newDiv.classList.add('hero-image');
      imageParent.replaceWith(newDiv);
    }

  }
)};