import PenguinController from './js/controller';
import PenguinModel from './js/model';
import { PenguinView, HomeView } from './js/view';

import './css/index.css';

const penguinModel = new PenguinModel(XMLHttpRequest);

const targetElement = document.getElementById('listOfPenguins');
const penguinView = new PenguinView(targetElement);
const homeView = new HomeView(targetElement);

const penguinController = new PenguinController(homeView, penguinView, penguinModel);

penguinController.onClickGetAllPenguins();