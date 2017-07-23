class PenguinModel {
  constructor(XMLHttpRequest) {
    this.XMLHttpRequest = XMLHttpRequest;
  }

  getPenguin(index, next) {
    var oReq = new this.XMLHttpRequest();

    oReq.onload = function onLoad(e) {
      const ajaxResponse = JSON.parse(e.currentTarget.responseText);
      const penguin = ajaxResponse[index];

      penguin.index = index;
      penguin.count = ajaxResponse.length;

      next(penguin);
    };

    oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
    oReq.send();
  }

  getAllPenguins(next) {
    var oReq = new this.XMLHttpRequest();

    oReq.onload = function(e) {
      const ajaxResponse = JSON.parse(e.currentTarget.responseText);
      const penguins = ajaxResponse;

      next(penguins);
    };

    oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
    oReq.send();
  }
}

export default PenguinModel;