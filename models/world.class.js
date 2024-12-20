class World {
    level = level1;
    backgroundObjects = level1.backgroundObjects;

    ctx;
    canvas;
    keyboard;
    camera = 0;
    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
    }

    /**
* Sets up the relationships between world and game objects.
*/
    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera, 0);
    }

    /**
* Adds an array of objects to the map by invoking the `addToMap` method for each object.
* @param {DrawableObject[]} objects - An array of objects to be added to the map.
*/
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * Adds a drawable object to the map, handling flipping if necessary.
     * @param {DrawableObject} mo - The drawable object to be added to the map.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
  * Flips the image of a drawable object horizontally for drawing.
  * @param {DrawableObject} mo - The drawable object to flip the image for.
  */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0)
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
 * Reverts the flipped image of a drawable object back to its original state.
 * @param {DrawableObject} mo - The drawable object to revert the flipped image for.
 */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}