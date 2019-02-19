import { SliderController } from './controller';
import { SliderModel } from './model';
import { SliderView } from './view';


class App {
    constructor() {
        let model = new SliderModel();
        let view = new SliderView();
        let controller = new SliderController(model, view);

        controller.init();
        controller.run();
    }
}
let app = new App();