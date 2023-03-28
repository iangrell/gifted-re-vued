import { AppState } from "../AppState.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { Gift } from "../models/Gift.js"




class GiftsService{

    async getGifts() {
        const res = await api.get('gifts')
        // logger.log('getting gifts', res.data)
        AppState.gifts = res.data.map(g => new Gift(g))
        logger.log(AppState.gifts)
    }

}

export const giftsService = new GiftsService()