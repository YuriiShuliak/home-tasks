export class SliderModel {
    constructor() {
        this._images = ['1.png', '2.png', '3.png', '4.png', '5.png'];
        this._currentImg = 0;
        this._interval = 2000;
        this._intervalId = null;
    }
    getImages(callBack) {
        callBack(this._images);
    }
    getCurrentImage(id, callBack) {
        this.setCurrentImage(id);
        callBack(this._images[id], id);
    }
    setCurrentImage(id) {
        this._currentImg = id;
    }
    getInterval() {
        return this._interval;
    }
    currentImgIncrement(callBack) {
        this._currentImg === this._images.length - 1 ? this._currentImg = 0 : this._currentImg++;
        callBack(this._images[this._currentImg], this._currentImg);
    }
    currentImgDecrement(callBack) {
        this._currentImg === 0 ? this._currentImg = this._images.length - 1 : this._currentImg--;
        callBack(this._images[this._currentImg], this._currentImg);
    }
}