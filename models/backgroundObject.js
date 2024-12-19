class BackgroundObject {
    height = 480;
    width = 720;
    x = 0;
    y = 0;
    imageCache = {};

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
    }

}