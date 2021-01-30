import {call, put, take} from "redux-saga/effects";
import {CONFIRM_USER, LOGIN_USER, SIGNUP_NEW_USER} from "./action";
import {SignInBody, SignUpBody} from "../../request/AuthApi";
import {postSignInApi, postSignUpApi} from "../../request/AuthRequest";
import {setToken} from "../../utils/storage"
import {getConfirmAccountApi} from "../../request/AccountRequest";

export function* AuthSaga() {
    while (true) {
        const action = yield take("*");
        switch (action.type) {
            case SIGNUP_NEW_USER:
                yield call(signupWorker, action.payload);
                break;
            case LOGIN_USER:
                yield call(loginWorker, action.payload);
                break;
            case CONFIRM_USER:
                yield call(confirmWorker, action.payload);
                break;
        }
    }
}


function* signupWorker(formValues: SignUpBody) {
    try {
        if (!formValues) {
            return
        }

        yield call(postSignUpApi, formValues);
        yield put({type: SIGNUP_NEW_USER, message: true})
    } catch (e) {
        yield put({type: SIGNUP_NEW_USER, message: e.message})
    }
}

function* loginWorker(formValues: SignInBody) {
    try {
        if (!formValues) {
            return
        }

        const response = yield call(postSignInApi, formValues);

        yield call(setToken, response.data)
        yield put({type: LOGIN_USER, message: true})
    } catch (e) {
        yield put({type: LOGIN_USER, message: e.message})
    }
}

function* confirmWorker(token:string) {
    try {
        if (!token) {
            return
        }

        const response = yield call(getConfirmAccountApi, token);

        yield call(setToken, response.data)
        yield put({type: CONFIRM_USER, message: response.message})
    } catch (e) {
        yield put({type: LOGIN_USER, message: e.message})
    }
}
