import { toast } from "react-toastify";
import instance from "../instance"

export const getUsers = async () => {
    try {
        const res = await instance.get('/users');
        return res.data;
    } catch (e) {
        toast.error("Failed to fetch users!");
    }
}