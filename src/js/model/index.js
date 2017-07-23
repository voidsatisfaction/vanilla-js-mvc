class PenguinModel {
  constructor(XMLHttpRequest) {
    this.XMLHttpRequest = XMLHttpRequest;
  }

  getPenguin(index, fn) {
    var oReq = new this.XMLHttpRequest();

    oReq.onload = function onLoad(e) {
      var ajaxResponse = JSON.parse(e.currentTarget.responseText);
      var penguin = ajaxResponse[index];

      penguin.index = index;
      penguin.count = ajaxResponse.length;

      fn(penguin);
    };

    oReq.open('GET', 'https://codepen.io/beautifulcoder/pen/vmOOLr.js', true);
    oReq.send();
  }
}

export default PenguinModel;