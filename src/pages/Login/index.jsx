import React from 'react'
import { Button, Checkbox, Form, Header, Container } from 'semantic-ui-react'
import { useLocation } from 'react-router-dom'
import './styles.scss'

function Login () {

  document.title = "Verball - Fale sobre seu dia"

  const location = useLocation()

  return (
    <>
      <main className='loginPage'>
      <Container>
        <div className='mb-5'>
          <Header as='h1' textAlign='center' className='verballLogo huge'>verball</Header>
          <Header as='h3' textAlign='center' className='verballSlogan'>fale mais sobre isso</Header>
        </div>
        {location.state && 
          <p>Você tentou acessar <b>{location.state.from.pathname}</b>, e esta é uma página restrita. Por favor, faça login.</p>
        }
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
      </main>
    </>
  )
}

export default Login