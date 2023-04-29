import {useSelector} from 'react-redux';
import {selectUserData} from "../redux/user/selector";

export function useAuth() {
  const {email, token, id} = useSelector(selectUserData);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  }
}