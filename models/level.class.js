/**
 * This represents a level in the game
 */
class Level {

    backgroundObjects;

  /**
   * Constructor for the Level class.
   * @param {BackgroundObject[]} backgroundObjects - Array of background objects.
   * @param {Cloud[]} clouds - Array of cloud objects.
   * @param {Coin[]} coins - Array of coin objects.
   * @param {Bottle[]} bottles - Array of bottle objects.
   * @param {Enemy[]} enemies - Array of enemy objects.
   * @param {Endboss} endboss - The end boss object.
   * @param {ThrowableObject[]} throwableObjects - Array of throwable objects.
   */
    constructor(backgroundObjects) {
        this.backgroundObjects = backgroundObjects;
    }
}