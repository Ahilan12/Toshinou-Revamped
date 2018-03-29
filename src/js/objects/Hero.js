class Hero extends Movable {
  constructor(x, y, factionId, id) {
    super(x, y);
    this.factionId = factionId;
    this.targetShip = null;
    this.id = id;
    /*console.log(this);*/
  }

  move(pos) {
    if (pos instanceof Vector2D) {
      Injector.injectScript('document.getElementById("preloader").moveShip(' + pos.x + ',' + pos.y + ');');
    }
  }
}
