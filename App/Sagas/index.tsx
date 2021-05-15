import { all, takeLatest, put, take } from "redux-saga/effects";

// Types
// import { StartupTypes } from "../Redux/StartupRedux";
import { UserTypes } from "../Redux/UserRedux";
// import { ServiceTypes } from "../Redux/ServiceRedux";
// import { BranchTypes } from "../Redux/BranchRedux";
// import { BookingTypes } from "../Redux/BookingRedux";

// Sagas
// import { startup } from "./StartupSaga";
import {
//   signUpSaga,
  signInSaga,
//   getUserProfileSaga,
//   editUserProfileSaga,
//   getUserAppointmentSaga,
//   changeAvatarSaga,
} from "./UserSaga";
// import {
//   fetchServiceSaga,
//   searchServiceSaga,
//   getMerchantSeriveSaga,
//   fetchCategorySaga,
//   searchServiceMerchantSaga,
// } from "./ServiceSaga";
// import {
//   fetchBranchSaga,
//   searchBranchSaga,
//   getMerchantsGuest,
// } from "./BranchSaga";
// import { bookingOnlineSaga } from "./BookingSaga";

// Apis
import UserAPI from "../Service/UserApi";
// import ServiceAPI from "../Services/ServiceApi";
// import BranchAPI from "../Services/BranchApi";
// import BookingAPI from "../Services/BookingApi";

// Api
const userApi = UserAPI.create();
// const serviceApi = ServiceAPI.create();
// const branchApi = BranchAPI.create();
// const bookingApi = BookingAPI.create();

export default function* rootSaga() {
  // Some sagas only receive an action

  // Starup
//   yield all([takeLatest(StartupTypes.STARTUP, startup)]);

  // Service
//   yield all([
//     takeLatest(
//       ServiceTypes.FETCH_SERVICE_REQUEST,
//       fetchServiceSaga,
//       serviceApi
//     ),
//   ]);
//   yield all([
//     takeLatest(
//       ServiceTypes.SEARCH_SERVICE_REQUEST,
//       searchServiceSaga,
//       serviceApi
//     ),
//   ]);
//   yield all([
//     takeLatest(
//       ServiceTypes.GET_MERCHANT_SERVICE_REQUEST,
//       getMerchantSeriveSaga,
//       serviceApi
//     ),
//   ]);
//   yield all([
//     takeLatest(
//       ServiceTypes.FETCH_CATEGORY_REQUEST,
//       fetchCategorySaga,
//       serviceApi
//     ),
//   ]);
//   yield all([
//     takeLatest(
//       ServiceTypes.SEARCH_SERVICE_MERCHANT_REQUEST,
//       searchServiceMerchantSaga,
//       serviceApi
//     ),
//   ]);

//   // Branch
//   yield all([
//     takeLatest(BranchTypes.FETCH_BRANCH_REQUEST, fetchBranchSaga, branchApi),
//   ]);
//   yield all([
//     takeLatest(
//       BranchTypes.GET_MERCHANTS_GUEST_REQUEST,
//       getMerchantsGuest,
//       branchApi
//     ),
//   ]);
//   yield all([
//     takeLatest(BranchTypes.SEARCH_BRANCH_REQUEST, searchBranchSaga, branchApi),
//   ]);
//   yield all([
//     takeLatest(BranchTypes.SEARCH_BRANCH_REQUEST, searchBranchSaga, branchApi),
//   ]);

  // User
  yield all([takeLatest(UserTypes.SIGN_IN_EMAIL_REQUEST, signInSaga, userApi)]);
//   yield all([takeLatest(UserTypes.SIGN_UP_REQUEST, signUpSaga, userApi)]);
//   yield all([
//     takeLatest(UserTypes.GET_USER_PROFILE_REQUEST, getUserProfileSaga, userApi),
//   ]);

//   yield all([
//     takeLatest(UserTypes.CHANGE_AVATAR_REQUEST, changeAvatarSaga, userApi),
//   ]);

//   yield all([
//     takeLatest(
//       UserTypes.EDIT_USER_PROFILE_REQUEST,
//       editUserProfileSaga,
//       userApi
//     ),
//   ]);
//   yield all([
//     takeLatest(
//       UserTypes.GET_USER_APPOINTMENT_REQUEST,
//       getUserAppointmentSaga,
//       userApi
//     ),
//   ]);

  // Booking
//   yield all([
//     takeLatest(
//       BookingTypes.BOOKING_ONLINE_REQUEST,
//       bookingOnlineSaga,
//       bookingApi
//     ),
//   ]);
}
