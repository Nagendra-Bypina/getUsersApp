import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

function App() {
  const [users, setUsers] = useState([]);
  const [params, setParams] = useState({ results: "" });
  const handleSubmit = (e) => {
    const { results } = params;
    console.log(results);
    e.preventDefault();
    axios
      .get(`https://randomuser.me/api/?results=${results}`)
      .then((users) => setUsers(users.data.results));
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setParams({
      ...params,
      [name]: value,
    });
  };

  console.log(params);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="count">
          <Form.Label>Results:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter results count"
            onChange={handleChange}
            name="results"
          />
        </Form.Group>
        <ul>
          {users.map((user, login) => {
            return (
              <li key={login.uuid}>
                {user.name.first} {user.name.last} {user.phone}
              </li>
            );
          })}
        </ul>

        <Button type="submit"> Get Users</Button>
      </Form>
    </>
  );
}

export default App;
