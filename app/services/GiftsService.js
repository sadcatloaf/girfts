import { AppState } from "../AppState.js";
import { Gifts } from "../models/Gifts.js";
import { api } from "./AxiosService.js";





class GiftsService {
    async fetchGifts() {
        const response = await api.get(`api/gifts`)
        console.log('🎁🎁🐕‍🦺🐕‍🦺');
        const gifts = response.data.map(giftData => new Gifts(giftData))
        AppState.Gifts = gifts
        console.log(AppState.Gifts)
    }

    async fetchGiftsBySearch(query) {
        try {
            const response = await api.get(`search/gifts?q=${query}`);
            console.log('🔎🎁')
            const gifts = response.data.map(giftData => new Gifts(giftData))
            AppState.Gifts = gifts
        } catch (error) {
            console.error("error fetching search gifts:", error)
        }
    }

    async openGifts(giftId) {
        const giftData = { opened: true }
        const response = await api.put(`api/gifts/${giftId}`, giftData)
        console.log('Retrieve gift from thief. Open your gift🎁🥳', response.data);
        // const openedGift = new Gifts(response.data)
        // const giftIndex = AppState.Gifts.findIndex(gift => gift.id == giftId)
        // AppState.Gifts.splice(giftIndex, 1, openedGift)
    }

}
export const giftsService = new GiftsService()