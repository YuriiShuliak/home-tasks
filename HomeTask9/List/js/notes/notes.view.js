class NotesView {

    constructor() {
        this._s = {
            list: document.querySelector('.list'),
            listFavorites: document.querySelector('.list-favorites'),
            removeBtnClass: 'list-element-btn',
            favoritesClass: 'fa-star'
        }

        this._t = {
            item: `
                <li class="list__element">
                    {{text}}
                    <button data-id="{{id}}" class="list-element-btn">X</button>
                    <i data-id="{{idFav}}" class="{{classFav}} fa-star"></i>
                </li>
            `
        }
    }

    renderNotes(notes) {
        let template = '';
        notes.forEach(n => {
            template += this._t.item
                .replace('{{text}}', n.text)
                .replace('{{id}}', n.id)
                .replace('{{idFav}}', n.id);
            template = this.toggleFavoritesClass(template, n);
        });
        this._s.list.innerHTML = template;
    }

    renderFavoritesNotes(notes) {
        let template = '';
        notes.filter(n => n.isFavorite === true).forEach(n => {
            template += this._t.item
                .replace('{{text}}', n.text)
                .replace('{{id}}', n.id)
                .replace('{{idFav}}', n.id);
            template = this.toggleFavoritesClass(template, n);
        });
        this._s.listFavorites.innerHTML = template;
    }

    listenRemovingNote(cb) {
        document.addEventListener('click', (e) => {
            let target = e.target;
            if (target.classList.contains(this._s.removeBtnClass)) {
                [].forEach.call(target.attributes, (i) => { if (i.name === 'data-id') cb(i.value) });
            }
        });
    }

    listenAddingFavorites(cb) {
        document.addEventListener('click', (e) => {
            let target = e.target;
            if (target.classList.contains(this._s.favoritesClass)) {
                [].forEach.call(target.attributes, (i) => { if (i.name === 'data-id') cb(i.value) });
            }
        })
    }

    toggleFavoritesClass(string, obj) {
        return obj.isFavorite ? string.replace('{{classFav}}', 'fas') : string.replace('{{classFav}}', 'far');
    }
}