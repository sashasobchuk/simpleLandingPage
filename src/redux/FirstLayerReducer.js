
const DOWNLOAD_FOTO = 'DOWNLOAD_FOTO'

const defaultStatus = {
    popupDisplay:'none',
}
const firstLayerReducer = (state = defaultStatus, action) => {
    switch (action.type) {
        // case CLOSE_POPUP:return {...state,popupDisplay:action.display}
        default:
            return state
    }
}


export default firstLayerReducer

