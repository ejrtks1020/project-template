import axiosIns from "@/api/client"
import _ from "lodash"

async function get(endpoint, params){
    try {
        const response = await axiosIns.get(endpoint, { params })
        const out = response.data
        if (out.code !== 0)
            throw new Error(out.errMsg)

    return out
}
catch (e) {
    console.log("get error : ", e)
    return undefined
}

}

async function post(endpoint, params, configs) {
    try {
        const response = await axiosIns.post(endpoint, params, configs)
        console.log(response)
        const out = response.data
        if (out.code !== 0)
            throw new Error(out.errMsg)

        return out
    }
    catch (e) {
        console.log("post error : ", e)
        return undefined
    }

}

export { get, post }
