import { useState, useEffect } from "react"
import UserService from "../services/UserService"
import { Button, ButtonGroup, Container, Table } from "reactstrap"
import { Link } from "react-router-dom"

function UsersList(props) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    UserService.getUsers().then((res) => {
      setUsers(res.data)
      console.log(res.data)
    })
  }

  const deleteUser = (id) => {
    UserService.deleteUser(id).then((res) => {
      setUsers(users.filter((user) => user.id !== id))
    })
  }

  const editUser = (user) => {
    props.history.push(`/users/${user.id}`)
  }

  const addUser = () => {
    props.history.push("/add/_add")
  }

  return (
    <div>
      <Container fluid>
        <div className="d-flex justify-content-between mt-4">
          <h3>Active Users</h3>
          <Button color="success" tag={Link} to="/users/new">
            Add User
          </Button>
        </div>
        <Table className="mt-4">
          <thead>
            <tr>
              <th width="20%">First Name</th>
              <th width="20%">Last Name</th>
              <th width="10%">Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td> {user.firstName} </td>
                <td> {user.lastName}</td>
                <td> {user.email}</td>
                <td>
                  <ButtonGroup>
                    <Button
                      size="sm"
                      color="primary"
                      tag={Link}
                      to={`/users/${user.id}`}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      color="danger"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
    /* <div >
                 <h2 className="text-center">User List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={addUser}> Add User</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> Email</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(
                                        user => 
                                        <tr key = {user.id}>
                                             <td> { user.firstName} </td>   
                                             <td> {user.lastName}</td>
                                             <td> {user.email}</td>
                                             <td>
                                                 <button onClick={ () => editEmployee(user.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => viewUser(user.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div> */
  )
}

export default UsersList
