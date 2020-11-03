import { userConstant } from "../../utils/constant/storeConstants";

const initialState = {
  isLoading: false,
  options: {},
};

const UserReducer = (state = initialState, action: any): object => {
  switch (action.type) {
    case userConstant.HANDLE_USER_INFORMATION:
      return {
        options: {
          ...state.options,
          ...action.props,
        },
      };
    case "loading":
      return {
        isLoading: !state.isLoading,
        options: {
          ...state.options,
          ...action.props,
        },
      };
    default:
      return state;
  }
};

export default UserReducer;
