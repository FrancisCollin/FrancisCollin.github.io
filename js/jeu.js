var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

// create a new Sprite from an image path
var gucci = PIXI.Sprite.fromImage('Medias/Gucci Bag.png');

// center the sprite's anchor point
gucci.anchor.set(0.5);

// move the sprite to the center of the screen
gucci.x = app.screen.width / 2;
gucci.y = app.screen.height / 2;

app.stage.addChild(gucci);

// Listen for animate update
app.ticker.add(function(delta) {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    gucci.rotation += 0.1 * delta;
});