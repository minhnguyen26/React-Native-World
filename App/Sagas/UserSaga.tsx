import {call,put,select} from "redux-saga-effects";
import AsyncStorage from "@react-native-community/async-storage";

import UserActions from "../Redux/UserRedux";

export function* saveTokenToStoreSaga(token: string){
    yield AsyncStorage.multiSet([["accessToken",token]],(err) => {
        if(err !== null){
            console.log("ERROR saveTokenStore: ",err);
        }
    });
}
export function* removeTokenFromStoreSaga() {
    yield AsyncStorage.multiRemove(["accessToken"], (err) => {
      if (err !== null) {
        console.log("ERROR removeTokenFromStore: ", err);
      }
    });
  }

export function* signInSaga(api: any, action: any) {
    try {
      const response = yield call(api.signInApi, action.userData);
      if (response.ok && response.status === 200) {
        if (response.data.rc === 0) {
          const token = response.data.data.token;
          yield call(saveTokenToStoreSaga, token);
          yield put(UserActions.signInEmailSuccess(token));
        } else {
          yield put(UserActions.signInEmailFailure(response.data.rd));
        }
      } else {
        yield put(UserActions.signInEmailFailure(response.problem));
      }
    } catch (error) {
      yield put(UserActions.signInEmailFailure(error));
    }
  }