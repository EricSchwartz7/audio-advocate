import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalModalExample = () => (
  <Modal trigger={<Button className="navButton">Log In</Button>}>
    <Modal.Header>Audio Advocate</Modal.Header>
    <Modal.Content image>
      <Modal.Description>
        <Header>Log In</Header>
        <p>User signup coming soon.</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample
