import * as actions from './actions'

const initialState = {
    formObj: {}
}
export function rootReducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_EMAIL_FORM_DATA:
            return {
                formObj: action.formObj
            }
        default:
            return
    }
}
export default rootReducer