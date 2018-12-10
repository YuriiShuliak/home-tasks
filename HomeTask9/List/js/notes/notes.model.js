class NotesModel {
    constructor() {
        this._notes = [{
            id: 1,
            text: 'Some text 1',
            isFavorite: false
        },
        {
            id: 2,
            text: 'Some text 2',
            isFavorite: false
        },
        {
            id: 3,
            text: 'Some text 3',
            isFavorite: false
        },
        {
            id: 4,
            text: 'Some text 4',
            isFavorite: false
        }
        ]
    }

    getNotes(cb) {
        cb(this._notes);
    }

    removeNote(id, cb, cb1) {
        this._notes = this._notes.filter((e) => e.id !== +id);
        this.getNotes(cb);
        this.getNotes(cb1);
    }

    toggleFavorite(id, cb, cb1) {
        let favElement = this._notes.find((e) => e.id === +id);
        favElement.isFavorite = favElement.isFavorite === false;
        this.getNotes(cb);
        this.getNotes(cb1);
    }
}