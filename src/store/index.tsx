import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReeducer from "./reducers/rootReducer"
import rootSaga from "./sagas/rootSaga"
import { composeWithDevTools } from "redux-devtools-extension"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReeducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store
