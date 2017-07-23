class PenguinView {
  constructor(element) {
    this.element = element;
    
    this.render = this.render.bind(this);
  }

  render(viewModel) {
    this.element.innerHTML = `
      <h3>${viewModel.name}</h3>
      <img class="penguin-image" src="${viewModel.imageUrl}" alt="${viewModel.name}" />
      <p><b>Size:</b>${viewModel.size}</p>
      <p><b>Favorite food:</b>${viewModel.favoriteFood}</p>
      <a id="previousPenguin" class="previous button" href="javascript:void(0);"
      data-penguin-index="${viewModel.previousIndex}">Previous</a>
      <a id="nextPenguin" class="next button" href="javascript:void(0);"
      data-penguin-index="${viewModel.nextIndex}">Next</a>
      <a id="goHome" class="home button" href="javascript:void(0);">Home</a>
    `;

    this.previousIndex = viewModel.previousIndex;
    this.nextIndex = viewModel.nextIndex;

    const previousPenguin = this.element.querySelector('#previousPenguin');
    previousPenguin.addEventListener('click', this.onClickGetPenguin);

    const nextPenguin = this.element.querySelector('#nextPenguin');
    nextPenguin.addEventListener('click', this.onClickGetPenguin);

    const goHome = this.element.querySelector('#goHome');
    goHome.addEventListener('click', this.onClickGetAllPenguins);
  }
}

export default PenguinView;