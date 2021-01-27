import {call, put, take} from "redux-saga/effects";
import {SIGNUP_NEW_USER} from "./action";
import {SignUpBody} from "../../request/AuthApi";
import {postSignUpApi} from "../../request/AuthRequest";

export function* AuthSaga() {
    while (true) {
        const action = yield take("*");
        switch (action.type) {
            case SIGNUP_NEW_USER:
                yield call(signupWorker, action.payload);
                break;
        }
    }
}


function* signupWorker(formValues: SignUpBody) {
    try {
        yield call(postSignUpApi, formValues);
        yield put({type: SIGNUP_NEW_USER, message: "Done"})
    } catch (e) {
        yield put({type: SIGNUP_NEW_USER, message: e.message})
    }
}
