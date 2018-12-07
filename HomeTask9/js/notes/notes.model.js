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

    removeNote(id, cb) {
        this._notes = this._notes.filter((e) => e.id !== +id);
        cb(this._notes);
    }

    toggleFavorite(id, cb) {

        let el = this._notes.find((e) => e.id === +id);
        el.isFavorite === false ? el.isFavorite = true : el.isFavorite = false;


        cb(this._notes);
    }
}