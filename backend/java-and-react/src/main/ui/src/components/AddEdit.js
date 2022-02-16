import { useState, useEffect } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { useNavigate, useParams } from "react-router-dom"
import UserService from '../services/UserService'


function AddEdit() {
 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")
 const [email, setEmail] = useState("")
 const navigate = useNavigate()
  const { id } = useParams()
  console.log(id)

 useEffect(() => {
   getUser()
 }, [])

  const getUser = async () => {
   if (id !== 'new') {
     UserService.getUserById(id).then((res) => {
       console.log(res.data)
       setFirstName(res.data.firstName)
       setLastName(res.data.lastName)
       setEmail(res.data.email)
     })
   }
  }

 const handleSubmit = (e) => {
   e.preventDefault()
   let user = { firstName: firstName, lastName: lastName, email: email }
   console.log(user)
   if (id !== 'new') {
     UserService.updateUser(user, id).then((res) => {
       console.log(res)
       navigate("/")
     })
   } else {
     UserService.createUser(user).then((res) => {
       console.log(res)
       navigate("/")
     })
   }
 }
  return (
    <div>
      <Container>
        <h3 className='mt-4'>{id !== 'new' ? 'Edit User' : 'Add User'}</h3>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>First Name</Label>
            <Input
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Last Name</Label>
            <Input
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="text"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button color="primary" type="submit" value="Save User">
              Save
            </Button>{" "}
            <Button color="secondary" to="/users" value="Cancel">
              Cancel
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  )
}

export default AddEdit