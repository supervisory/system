import firebase from 'firebase'
import { connect } from 'react-redux'

// export const TOKEN_KEY = "@airbnb-Token"
// export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null
// export const getToken = () => localStorage.getItem(TOKEN_KEY)
// export const login = token => {
//   localStorage.setItem(TOKEN_KEY, token)
// }
// export const logout = () => {
//   localStorage.removeItem(TOKEN_KEY)
// }

const isAuthenticated = () => {

  const { email, password } = this.props

  console.log(`email: ${email}`)
  console.log(`password: ${password}`)

  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    let errorCode = error.code,
      errorMessage = error.message
    console.log(`Falha na requisição do login:\n${error}\n${errorCode}\n${errorMessage}`)
    // ...
  })
}

const mapStateToProps = store => ({
  email: store.setLoginState.email,
  password: store.setLoginState.password
})

export default connect(mapStateToProps)(isAuthenticated)