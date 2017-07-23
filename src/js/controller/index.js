class PenguinController {
  constructor(penguinView, penguinModel) {
    this.penguinView = penguinView;
    this.penguinModel = penguinModel;

    this.onClickGetPenguin = this.onClickGetPenguin.bind(this);
    this.showPenguin = this.showPenguin.bind(this);

    this.penguinView.onClickGetPenguin = this.onClickGetPenguin;
  }

  onClickGetPenguin(e) {
    var target = e.currentTarget;
    var index = parseInt(target.dataset.penguinIndex, 10);

    this.penguinModel.getPenguin(index, this.showPenguin);
  }

  showPenguin(penguinModelData) {
    const penguinViewModel = {
      name: penguinModelData.name,
      imageUrl: penguinModelData.imageUrl,
      size: penguinModelData.size,
      favoriteFood: penguinModelData.favoriteFood
    };

    penguinViewModel.previousIndex = penguinModelData.index - 1;
    penguinViewModel.nextIndex = penguinModelData.index + 1;

    if (penguinModelData.index === 0) {
      penguinViewModel.previousIndex = penguinModelData.count - 1;
    }

    if (penguinModelData.index === penguinModelData.count - 1) {
      penguinViewModel.nextIndex = 0;
    }
    this.penguinView.render(penguinViewModel);
  }
}

export default PenguinController;