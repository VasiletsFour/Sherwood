import {LOCATION_CHANGE} from "connected-react-router";
import {call, put, take} from "redux-saga/effects";
import {ConfirmAgain, SignInBody, SignUpBody} from "../../request/AuthApi";
import {getConfirmAccountApi, postConfirmApi, postSignInApi, postSignUpApi} from "../../request/AuthRequest";
import {CONFIRM_ACCOUNT_URL, getToken, removeToken, setToken} from "../../utils";
import {getAccountAction} from "../account";
import {CONFIRM_AGAIN, CONFIRM_USER, LOGIN_USER, LOGOUT_USER, SIGNUP_NEW_USER} from "./action";

export function* AuthSaga() {
    while (true) {
        const action = yield take("*");
        const confirmUrl =
            action.type === LOCATION_CHANGE && CONFIRM_ACCOUNT_URL.match(action.payload.location).isMatched;

        if (confirmUrl) {
            const token = action?.payload?.location?.pathname.replace(CONFIRM_ACCOUNT_URL.urlTemplate + "/", "")

            yield call(confirmWorker, token);
        }

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
            case LOGOUT_USER:
                yield call(logoutWorker);
                break;
            case CONFIRM_AGAIN:
                yield call(confirmAgainWorker, action.payload);
                break;
        }
    }
}

function* signupWorker(formValues: SignUpBody) {
    try {
        if (!formValues) return;


        yield call(postSignUpApi, formValues);
        yield put({type: SIGNUP_NEW_USER, message: true});
    } catch (err) {
        yield put({type: SIGNUP_NEW_USER, message: {err: err.message}});
    }
}

function* loginWorker(formValues: SignInBody) {
    try {
        if (!formValues) return;

        const response = yield call(postSignInApi, formValues);

        yield call(setToken, response.data);
        yield put({type: LOGIN_USER, message: {data: true}});
    } catch (err) {
        yield put({ type: LOGIN_USER, message: { err: err.message } });
    }
}

function* confirmWorker(token: string) {
    try {
        if (!token) return;

        const response = yield call(getConfirmAccountApi, token);

        yield put({type: CONFIRM_USER, message: response});
    } catch (err) {
        yield put({
            type: CONFIRM_USER,
            message: {type: err.name, message: err.message}
        });
    }
}

function* logoutWorker() {
    try {
        if (!getToken()) return;

        yield put(getAccountAction.trigger());
        yield call(removeToken);
        yield put({type: LOGOUT_USER, message: true});
    } catch (err) {
        yield put({
            type: LOGOUT_USER,
            message: {type: err.name, message: err.message}
        });
    }
}

function* confirmAgainWorker(formValues: ConfirmAgain) {
    try {
        if (!formValues) return;

        const response = yield call(postConfirmApi, formValues);

        yield put({type: CONFIRM_AGAIN, message: response.message});
    } catch (err) {
        yield put({
            type: CONFIRM_AGAIN,
            message: {type: err.name, message: err.message}
        });
    }
}
