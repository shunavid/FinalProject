import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  Input,
  // Label,
  // FormText,
  // Span,
} from "reactstrap";
function Login(article) {
  const [admin, setAdmin] = useState(true);
  const [entry, setEntry] = useState([]);

  // const handleLogin = (e) => {
  //   e.preventDefault();
  // };
  const submitForm = (e) => {
    e.preventDefault();
    const adminEntry = { username: admin.username, password: admin.password };
    setEntry([...entry, adminEntry]);
    console.log(entry);
  };

  const handleLogin = (e) => {
    // e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", admin)

      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <div>
      <div style={{ color: "#000039" }}>.</div>
      <Form
        action=""
        onSubmit={submitForm}
        style={{
          textAlign: "start",
          backgroundColor: "#000039",
          display: "flex",
          flexDirection: "column",
          marginLeft: "30%",
          marginTop: "6rem",
          //   position: "relative",
          width: "30%",
          borderRadius: "5%",
          height: "20rem",
        }}
      >
        <FormGroup style={{ marginTop: "3rem" }}>
          <div style={{ marginLeft: "15%", width: "60%" }}>
            <Input
              type="Text"
              placeholder="User Name"
              value={admin.username}
              onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
            />
          </div>
          <div
            style={{
              marginLeft: "15%",
              width: "60%",
              marginRight: "10%",
              marginTop: "2rem",
            }}
          >
            <Input
              type="Password"
              placeholder="Password"
              autoComplete="off"
              value={admin.password}
              onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            />
          </div>
          <br />
        </FormGroup>

        <Button
          type="submit"
          value="Login"
          onClick={(e) => handleLogin(e)}
          style={{
            backgroundColor: "green",
            width: "20%",
            marginLeft: "15%",
            marginBottom: "6%",
            marginTop: "6%",
          }}
        >
          login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
