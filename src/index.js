import PenguinController from './js/controller';
import PenguinModel from './js/model';
import PenguinView from './js/view';

import './css/index.css';

const penguinModel = new PenguinModel(XMLHttpRequest);

const targetElement = document.getElementById('listOfPenguins');
const penguinView = new PenguinView(targetElement);

const controller = new PenguinController(penguinView, penguinModel);

controller.onClickGetPenguin({ currentTarget: { dataset: { penguinIndex: 0 } } });
controller.onClickGetAllPenguins();