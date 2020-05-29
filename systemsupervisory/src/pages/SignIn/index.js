import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import api from '../../services/api'
import { login } from '../../services/auth'

import Logo from '../../assets/image/logo.png'

import { withStyles } from '@material-ui/core/styles';
import { Form, Container } from './styles'

const styles = {
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    },
}

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
      this.setState({ error: 'Preencha e-mail e senha para continuar!' })
    } else {
      try {
        const response = await api.post('/sessions', { email, password })
        login(response.data.token);
        this.props.history.push('/app')
      } catch (err) {
        this.setState({
          error:
            'Houve um problema com o login, verifique suas credenciais.'
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
                    placeholder='Endereço de e-mail'
                    onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                    type='password'
                    placeholder='Senha'
                    onChange={e => this.setState({ password: e.target.value })}
                />
                    {this.state.error && <p>{this.state.error}</p>}
                <button className={classes.root} type='submit'>Entrar</button>
            </Form>
        </Container>
    );
  }
}

export default withStyles(styles)(withRouter(SignIn))
