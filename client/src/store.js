import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {listUserReducer, userSignInReducer,} from "./reducers/userReducers";
import { createPortFolioItemReducer, portfolioListReducers, portfolioUpdateReducer } from './reducers/portfolioReducers';




  const initialState = {
    userSignIn: {
      userInfo: localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null,
    }, 
  };
  
  const reducer = combineReducers({
    userSignIn: userSignInReducer,
    projectItemCreate: createPortFolioItemReducer,
    portfolioList: portfolioListReducers,
    portflioItemUpdate: portfolioUpdateReducer,
    userList:listUserReducer,

    // userRegister: userRegisterReducers,
    // userList: userListReducer,
    // userDetails: userDetailsReducer,
    // userDelete: userDeleteReducer,
    // userUpdate: userUpdateReducer,
    // updateProfile: updateProfileReducer,
    // activityCreate: acitivityCreateReducers,
    // activityLists: activityListReducer,
    // activityDelete: activityDeleteReducer,
    // activityUpdate: activityUpdateReducer,
    // activityDetails: activityDetailsReducer,
    // projectCreate: projectCreateReducers,
    // projectLists: projectListReducer,
    // projectDelete: projectDeleteReducer,
    // projectUpdate: projectUpdateReducer,
    // projectDetails: projectDetailsReducer,
    // projectRelated: projectRelatedListReducer,
    // newsCreate: newsCreateReducers,
    // newsLists: newsListReducer,
    // newsDelete: newsDeleteReducer,
    // newsUpdate: newsUpdateReducer,
    // newsDetails: newsDetailsReducer,
    // cart: cartReducer,
    // donationCreate: donationCreateReducers,
    // donationHistory:donationHistoryReducers,
    // emailSend: emailSendReducer,
    // currency:currencyReducers
  });
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
  
  export default store;
  