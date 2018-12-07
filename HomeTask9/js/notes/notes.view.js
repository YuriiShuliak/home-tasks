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
                    <i data-id="{{idF}}" class="far fa-star"></i>
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
                .replace('{{idF}}', n.id);
        });
        this._s.list.innerHTML = template;
    }

    renderFavoritesNotes(notes) {

        let template = '';


        notes.filter(n => n.isFavorite === true).forEach(n => {
            template += this._t.item
                .replace('{{text}}', n.text)
                .replace('{{id}}', n.id)
                .replace('{{idF}}', n.id);
        });
        this._s.listFavorites.innerHTML = template;
    }

    listenRemovingNote(cb) {
        this._s.list.addEventListener('click', (e) => {
            let target = e.target;
            if (target.classList.contains(this._s.removeBtnClass)) {
                [].forEach.call(target.attributes, (i) => { if (i.name === 'data-id') cb(i.value) });
            }
        });
    }

    listenToggleFavorite(cb) {
        this._s.list.addEventListener('click', (e) => {
            let target = e.target;
            if (target.classList.contains(this._s.favoritesClass)) {
                if (!target.classList.replace("far", "fas")) target.classList.replace("fas", "far");
                [].forEach.call(target.attributes, (i) => { if (i.name === 'data-id') cb(i.value) });
            }
        })
    }


}