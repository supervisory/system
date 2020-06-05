import { AUTH_EMAIL, AUTH_PASSWORD } from './actionTypes'

export const setEmailAuth = value => ({
    type: AUTH_EMAIL,
    email: value
})

export const setPasswordAuth = value => ({
    type: AUTH_PASSWORD,
    password: value
})