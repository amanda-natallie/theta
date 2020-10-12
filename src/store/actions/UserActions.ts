import { userConstant } from "../../utils/constant/storeConstants"

interface UserProps {
    options: object
}

export const handleUserData = (userInfo: UserProps): object => {
    return { type: userConstant.HANDLE_USER_INFORMATION, userInfo }
}

