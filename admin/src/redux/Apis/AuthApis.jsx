import { axiosi } from "src/utils/axios";

export const login = async (cred) => {
    try {
        const res = await axiosi.post("auth/login", cred)
        
        return res.data
    } catch (error) {
        throw error.response.data
    }
}

export const checkAuth = async (cred) => {
    try {
        const res = await axiosi.get("auth/check-auth")
        return res.data
    } catch (error) {
        throw error.response.data
    }
}