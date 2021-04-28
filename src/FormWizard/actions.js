export const SET_EMAIL_FORM_DATA = 'SET_EMAIL_FORM_DATA'
export const SET_PERSONAL_FORM_DATA = 'SET_PERSONAL_FORM_DATA'

export function setEmailFormData(formObj) {
    return {
        type: SET_EMAIL_FORM_DATA,
        formObj
    }
}