export class SliderView {

    constructor() {
        this._selectors = {
            slider: document.querySelector('.slider-container'),
            sliderControls: document.querySelector('.slider-controls'),
            sliderControl: document.querySelectorAll('.slider-control'),
            arrows: document.querySelectorAll('.control-arrows')
        }
    }
    initSlider(arrImg) {
        this._selectors.slider.style.backgroundImage = 'url("./img/' + arrImg[0] + '")';
        arrImg.forEach((item, i) => {
            let div = document.createElement('div');
            div.setAttribute('data-id', i);
            div.classList.add('slider-control');
            if (i === 0) div.classList.add('slider-control-active');
            this._selectors.sliderControls.appendChild(div);
        });
    }
    sliderControlClick(callBack) {
        this._selectors.sliderControls.addEventListener('click', e => {
            if (!e.target.classList.contains('slider-control')) return;
            let currentImg = +[].find.call(e.target.attributes, i => i.name === 'data-id').value;
            callBack(currentImg);
        })
    }
    arrowsClick(callBack) {
        this._selectors.slider.addEventListener('click', e => {
            if (!e.target.classList.contains('control-arrows')) return;
            let direction = [].find.call(e.target.attributes, i => i.name === 'data-value').value;
            callBack(direction);
        })
    }
    renderSlider(currentImg, id) {
        this._selectors.slider.style.backgroundImage = 'url("./img/' + currentImg + '")';
        [].find.call(this._selectors.sliderControls.children, i => i.classList.contains('slider-control-active'))
            .classList.remove('slider-control-active');
        this._selectors.sliderControls.children[id].classList.add('slider-control-active');
    }
}