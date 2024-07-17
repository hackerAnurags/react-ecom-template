import { fork, all } from 'redux-saga/effects';
import DashboardSaga from './Saga/DashboardSaga';

function* rootSaga() {
    yield all([
        fork(DashboardSaga),
    ]);
}

export default rootSaga