import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import api from '../../services/api'
import { login } from '../../services/auth'
import Logo from '../../assets/image/logo.png'
import { Form, Container } from './styles'

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  }

  handleSignIn = async e => {
    e.preventDefault()
    const { email, password } = this.state;
    if (!email || !password) {
      this.setState({ error: 'Preencha todos os campos para continuar!' })
    } else {
      try {
        const response = await api.post('/sessions', { email, password })
        login(response.data.token);
        this.props.history.push('/app')
      } catch (err) {
        this.setState({
          error:
            'Usuário ou senha inválidos'
        });
      }
    }
  }

  render() {

    const { classes } = this.props

    return (
        <Container>
            <Form onSubmit={this.handleSignIn}>
                <img src={Logo} alt={'Logo ITT CHIP'} />
                <input
                    type='email'
                    placeholder='E-mail'
                    onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                    type='password'
                    placeholder='Senha'
                    onChange={e => this.setState({ password: e.target.value })}
                />
                    {this.state.error && <p>{this.state.error}</p>}
                <hr />
                <button type='submit'>Entrar</button>
            </Form>
        </Container>
    );
  }
}

export default withRouter(SignIn)
