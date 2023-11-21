import { get, post } from "@/api/request_handler"

export default {
    async connect(params){
        return await post('/auth/connect', params)
    }
}
