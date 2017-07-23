class HomeView {
  constructor(element) {
    this.element = element;

    this.render = this.render.bind(this);
  }

  render(viewModel) {
    this.element.innerHTML = `
      <h1>Welcome to Penguin World!</h1>
      <p>These are our fabulous penguins...</p>
      <div class="penguin-images-wrapper"></div>
    `;
    let penguinImageElements = '';
    viewModel.forEach((penguin, i) => {
      penguinImageElements += `
        <img class="penguin-images" id="penguin-image-${i}" src=${penguin.imageUrl} width="200" height="200">
      `;
    });
    document.querySelector('.penguin-images-wrapper').innerHTML = penguinImageElements;
    // this.onClickGetPenguin
    const penguinImages = document.querySelectorAll('.penguin-images');
    penguinImages.forEach((image, i) => {
      image.addEventListener('click', ((i) => {
        return () => {
          this.onClickGetPenguin({
            currentTarget: { dataset: { penguinIndex: `${i}` } }
          });
        };
      })(i));
    });
  }
}

export default HomeView;