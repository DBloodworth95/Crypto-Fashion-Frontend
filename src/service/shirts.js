import { ActionCreators } from "../redux/shirtReducer";
import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://localhost:5001/clothes/',
})

export const GetShirts = async (dispatch) => {
    try {
        //api call to retrive the response.
        const { data } = await axiosInstance.get();

        //Now that we have the response, we set the shirts state and pass it the response to
        //populate the shirts with...shirts :)
        dispatch(ActionCreators.getShirts(data));
    } catch {
        console.log('Error fetching shirts!');
    }
}

export const DeleteShirt = async (dispatch, shirt) => {
    try {
        await axiosInstance.delete(`/${shirt.id}`);
        dispatch(ActionCreators.deleteShirt(shirt));
    } catch {
        console.log('Error deleting shirt!');
    }
}

export const AddShirt = async (dispatch, shirt) => {
    try {
        //Shirt is currently a string so we make it into an object
        //for C# to parse properly.
        const { data } = await axiosInstance.post('', shirt);
        dispatch(ActionCreators.addShirt(data));
    } catch {
        console.log('Error adding shirt!');
    }
}

export const EditShirt = async (dispatch, shirt) => {
    try {
        await axiosInstance.put('', shirt);
        dispatch(ActionCreators.editShirt(shirt));
    } catch {
        console.log('Error editing shirt!');
    }
}