import {createReducer,createActions} from "reduxsauce"
import Immutable from "seamless-immutable";
import AsyncStorage from "@react-native-community/async-storage";

/* ------------- Types and Action Creators ------------- */
const{Types, Creators} = createActions({
    signInEmailRequest: ["userData"],
    signInEmailSuccess: ["data"],
    signInEmailFailure: ["signInEmailError"],

    // signUpRequest: ["userData"],
    // signUpSuccess: ["data"],
    // signUpFailure: ["signUpError"],
});
export const UserTypes = Types;
export default Creators;

interface UserStateTypes {
    signInData: any;
    fetchingSignIn: false,
    signInError: null,
    merge: (params: object) => any;
}

export const INITIAL_STATE: UserStateTypes = Immutable({
    signInData:{},
    fetchingSignIn: false,
    signInError: null,
})

/* ------------- Reducers ------------- */
const signInEmailRequest =(state: UserStateTypes) =>
    state.merge({})
const signInEmailSuccess= (state: UserStateTypes, {data}: any) =>
    state.merge({
        fetchingSignIn :false,
        signInError: null,
        signInData:data,
    });
const signInEmailFailure=(state:UserStateTypes,{signInEmailError}:any)=>
    state.merge({fetchingSignIn:false,sigInError:signInEmailError});

 export const reducer = createReducer(INITIAL_STATE,{
    [Types.SIGN_IN_EMAIL_REQUEST]: signInEmailRequest,
    [Types.SIGN_IN_EMAIL_SUCCESS]: signInEmailSuccess,
    [Types.SIGN_IN_EMAIL_FAILURE]: signInEmailFailure,
 });