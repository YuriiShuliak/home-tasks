class NotesController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }

    init() {
        this._model.getNotes((notes) => {
            this._view.renderNotes(notes);
        });
        this.listeners();
    }

    listeners() {
        this._view.listenRemovingNote((id) => {
            this._model.removeNote(id, (notes) => {
                this._view.renderNotes(notes);
            })
        });
        this._view.listenToggleFavorite((id) => {
            this._model.toggleFavorite(id, (notes) => {
                this._view.renderFavoritesNotes(notes);
            })
        });
    }
}