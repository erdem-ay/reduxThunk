import axios from "axios";
import {
  setLoadingTrueAction,
  setLoadingFalseAction,
} from "../actions/appActions";
import { setUserListAction } from "../actions/userActions";

export const getUserList = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingTrueAction());
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch(setUserListAction(data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoadingFalseAction());
    }
  };
};
