class PenguinController {
  constructor(homeView, penguinView, penguinModel) {
    this.homeView = homeView;
    this.penguinView = penguinView;
    this.penguinModel = penguinModel;

    this.onClickGetPenguin = this.onClickGetPenguin.bind(this);
    this.onClickGetAllPenguins = this.onClickGetAllPenguins.bind(this);
    this.showPenguin = this.showPenguin.bind(this);
    this.showAllPenguins = this.showAllPenguins.bind(this);

    this.homeView.onClickGetPenguin = this.onClickGetPenguin;
    this.penguinView.onClickGetAllPenguins = this.onClickGetAllPenguins;
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

  onClickGetAllPenguins() {
    this.penguinModel.getAllPenguins(this.showAllPenguins);
  }

  showAllPenguins(penguins) {
    this.homeView.render(penguins);
  }
}

export default PenguinController;