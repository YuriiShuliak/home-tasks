export class SliderController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }

    init() {
        this._model.getImages((arrImg) => {
            this._view.initSlider(arrImg);
        });

        this.listeners();

    }
    run() {
        this._model._intervalId = setInterval(() => {
            this._model.currentImgIncrement((currentImage, id) => {
                this._view.renderSlider(currentImage, id);
            });
        }, this._model.getInterval());
    }

    listeners() {
        this._view.sliderControlClick((id) => {
            clearInterval(this._model._intervalId);
            this._model.getCurrentImage(id, (currentImage, id) => {
                this._view.renderSlider(currentImage, id);
            });
            this.run();
        });
        this._view.arrowsClick((direction) => {
            clearInterval(this._model._intervalId);
            if (direction === 'left') {
                this._model.currentImgDecrement((currentImage, id) => {
                    this._view.renderSlider(currentImage, id);
                });
            } else {
                this._model.currentImgIncrement((currentImage, id) => {
                    this._view.renderSlider(currentImage, id);
                });
            }
            this.run();
        });
    }
}