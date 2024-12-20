class BackgroundObject extends DrawableObject {
    height = 480;
    width = 720;
    x = 0;
    y = 0;
    imageCache = {};

    constructor(imagePath, x) {
        super();
        this.x = x;
        this.loadImage(imagePath);

    }

}