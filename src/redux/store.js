import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import { composeWithDevTools } from 'redux-devtools-extension'

import RootReducer from './reducer'

import storage from 'redux-persist/lib/storage/session'

import thunk from 'redux-thunk'

const persistConfig = {
    key: 'state',
    storage: storage,
}
const initialState = {
    sidebarShow: 'responsive'
}

const changeStateSidebar = (state = initialState, { type, ...rest }) => {
    switch (type) {
        case 'set':
            return { ...state, ...rest }
        default:
            return state
    }
}

const persistedReducer = persistReducer(persistConfig, RootReducer, changeStateSidebar)

export default () => {
    let store = createStore(
        persistedReducer,
        {},
        composeWithDevTools(applyMiddleware(thunk))
    )
    let persistor = persistStore(store)
    return { store, persistor }
}
