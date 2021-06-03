import React from "react";
import { Button, Form, FormGroup, Input, Label, FormText } from "reactstrap";

function register({ article }) {
  return (
    <>
      <div style={{ color: "#9FE2BF" }}>.</div>
      <Form
        className="register-form"
        style={{
          textAlign: "start",
          backgroundColor: "#E5E4E2",
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
            marginLeft: "40%",
            marginTop: "3rem",
          }}
        >
          Register Form
        </div>
        <FormGroup style={{ marginTop: "2rem", display: "flex" }}>
          <div style={{ marginLeft: "10%", width: "100%" }}>
            <Input type="Text" placeholder="First Name" />
          </div>
          <div style={{ marginLeft: "10%", width: "100%", marginRight: "10%" }}>
            <Input type="Text" placeholder="Last Name" />
          </div>
        </FormGroup>
        <FormGroup>
          <Input
            style={{ marginTop: "2rem", width: "80%", marginLeft: "10%" }}
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Your Email"
          />
          <Input
            style={{ marginTop: "2rem", width: "80%", marginLeft: "10%" }}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter Your Password"
          />
          <Input
            style={{ marginTop: "2rem", width: "80%", marginLeft: "10%" }}
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Confirm Your Password"
          />
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
        <FormGroup
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
        </FormGroup>
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

export default register;

{
  /* <Label for="exampleFile">File</Label> */
}
