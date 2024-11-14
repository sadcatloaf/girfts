import { AppState } from "../AppState.js"

export class Gifts {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.creatorId = this.creatorId
        this.profileIdsOpened = data.profileIdsOpened
        this.id = data.id
    }




    get giftemplate() {
        return `
        
        <div class="col-md-3">
        <div class="card">
          <img class="card-img p-2" src="${this.url}" alt="">
          <p>${this.tag}</p>
          <div class="d-flex justify-content-between">
              ${this.deleteButton}
          </div>
          </div>
          </div>
         
        `
    }

    get deleteButton() {
        if (this.creatorId != AppState.account.id) return ''
        return `
        <button onclick="app.GiftsController.deleteGift('${this.id}')" class="btn btn-danger delete-gift" title="Delete gift"></button>
        `
    }

}