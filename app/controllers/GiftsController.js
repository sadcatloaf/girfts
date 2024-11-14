import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { Pop } from "../utils/Pop.js";

export class GiftsController {
    constructor() {
        console.log('🎁🎮')
        AppState.on('account', this.fetchGifts)
        AppState.on('Gifts', this.drawGifts)
    }


    async postGift() {
        try {
            event.preventDefault()
            const formElm = event.target
            console.log('📬🎁', formElm);
            // const formData = getformData(formElm)
        } catch {

        }
    }
    async fetchGifts() {
        try {
            await giftsService.fetchGifts()
        } catch (error) {
            console.error(error)
            Pop.toast("Could not catch gift thief", 'error')
        }
    }

    async openGifts(giftId) {
        try {
            console.log('🎁', giftId);
            // await giftsService.openGifts(giftId)
        } catch (error) {
            Pop.error(error)
            console.error(error);
        }
    }

    async fetchGiftsBySearch() {
        try {
            event.preventDefault()
            console.log('🎁🔎🔎');
            const formElm = event.target
            // @ts-ignore
            const search = formElm.query.value
            console.log('🔎🐕‍🦺', search)
        } catch (error) {
            console.error(error)
            Pop.toast("Your gifts was stolen", error)
        }
    }

    drawGifts() {
        console.log('🖌️🎁');
        const giftListElm = document.getElementById('gift-template')
        giftListElm.innerHTML = ''
        AppState.Gifts.forEach(gifts => giftListElm.innerHTML += gifts.giftemplate)

    }
}


