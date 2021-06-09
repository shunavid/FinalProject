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

function Register({ article }) {
  const [tourist, setTourist] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Gender: "",
    PhoneNumber: "",
    Age: "",
    Register: "",
  });

  const sendData = (e) => {
    // e.preventDefault();

    axios
      .post("http://localhost:5000/travelers", tourist)

      .then(function (response) {
        console.log(response);
      });
  };

  // axios.get("http://localhost:5000/travelers").then(res => console.log(res.data))

  return (
    <>
      <div style={{ color: "#000039" }}>.</div>
      <Form
        className="register-form"
        style={{
          textAlign: "start",
          backgroundColor: "#000039",
          display: "flex",
          flexDirection: "column",
          marginLeft: "25%",
          marginTop: "6rem",
          //   position: "relative",
          width: "50%",
          borderRadius: "5%",
        }}
      >
        <div
          style={{
            marginLeft: "35%",
            marginTop: "3rem",
            color: "white",
          }}
        >
          KEEP IN TOUCH, JOIN OUR EMAIL LIST
        </div>
        <FormGroup style={{ marginTop: "2rem", display: "flex" }}>
          <div style={{ marginLeft: "10%", width: "100%" }}>
            <Input
              type="Text"
              placeholder="First Name"
              value={tourist.FirstName}
              onChange={(event) =>
                setTourist({ ...tourist, FirstName: event.target.value })
              }
            />
          </div>
          <div style={{ marginLeft: "10%", width: "100%", marginRight: "10%" }}>
            <Input
              type="Text"
              placeholder="Last Name"
              value={tourist.LastName}
              onChange={(event) =>
                setTourist({ ...tourist, LastName: event.target.value })
              }
            />
          </div>
        </FormGroup>
        <FormGroup style={{ marginTop: "2rem", display: "flex" }}>
          <Input
            style={{ width: "93%", marginLeft: "10%" }}
            type="email"
            name="email"
            id="gmail"
            placeholder="Enter Your Email"
            value={tourist.Email}
            onChange={(event) =>
              setTourist({ ...tourist, Email: event.target.value })
            }
          />
          <div
            style={{
              marginLeft: "10%",
              width: "100%",
              marginRight: "10%",
              color: "white",
            }}
          >
            <FormGroup
              onChange={(e) => {
                setTourist({ ...tourist, Gender: e.target.value });
              }}
            >
              <Input type="radio" name="gender" value="Male" />
              <span>Male</span>
              <Input
                type="radio"
                name="gender"
                value="Female"
                style={{ marginLeft: "15%" }}
              />
              <span>Female</span>
            </FormGroup>
          </div>{" "}
        </FormGroup>
        <FormGroup style={{ marginTop: "2rem", display: "flex" }}>
          <Input
            style={{ width: "93%", marginLeft: "10%" }}
            type="number"
            placeholder="Your Phone Number"
            value={tourist.PhoneNumber}
            onChange={(event) =>
              setTourist({ ...tourist, PhoneNumber: event.target.value })
            }
          />
          <div style={{ marginLeft: "10%", width: "100%", marginRight: "10%" }}>
            <Input
              type="number"
              placeholder="Enter Your Age"
              name="age"
              value={tourist.Age}
              onChange={(event) =>
                setTourist({ ...tourist, Age: event.target.value })
              }
            />
          </div>
        </FormGroup>
        {/* <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
        {/* <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input
            type="select"
            name="selectMulti"
            id="exampleSelectMulti"
            multiple
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup> */}
        {/* <FormGroup
          style={{ marginLeft: "10%", marginRight: "10%", marginTop: "1rem" }}
        >
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Input
            type="file"
            name="file"
            id="exampleFile"
            style={{ marginLeft: "10%" }}
          />
          <FormText color="muted"></FormText>
        </FormGroup> */}
        {/* <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option one is this and
              that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Option two can be something
              else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled /> Option three is
              disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Check me out
          </Label>
        </FormGroup> */}
        <Button
          onClick={(e) => sendData(e)}
          type="submit"
          value="Register"
          style={{
            backgroundColor: "green",
            width: "20%",
            marginLeft: "40%",
            marginBottom: "6%",
            marginTop: "6%",
          }}
        >
          Register Now
        </Button>
      </Form>
    </>
  );
}

export default Register;

{
  /* <Label for="exampleFile">File</Label> */
}
