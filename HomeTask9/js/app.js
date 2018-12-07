class App {
    constructor() {
        let model = new NotesModel();
        let view = new NotesView();
        let controller = new NotesController(model, view);

        controller.init();
    }
}

let app = new App();
