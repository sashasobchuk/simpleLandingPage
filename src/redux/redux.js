import { combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import firstLayerReducer from "./FirstLayerReducer";

const rootReducer = combineReducers({

    firstLayer:firstLayerReducer,

})

export const store = createStore(rootReducer,composeWithDevTools() );