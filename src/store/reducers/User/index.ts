import { User } from "../../../const/types";

interface UserState {
    users: User[],
    token: string,
}

const initialState: UserState  = {
    users: [],
    token: "123",
};

const userReducer = (state = initialState) => {
    return state;
};

export default userReducer;
