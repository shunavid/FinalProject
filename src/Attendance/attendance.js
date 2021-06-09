import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  Label,
  Table,
} from "reactstrap";

import axios from "axios";

function Attendance() {
  const [travelers, setTravelers] = useState();
  const [traveler, setTraveler] = useState();

  const [open, setOpen] = useState(false);
  const [focusAfterClose, setFocusAfterClose] = useState(true);

  // const deleteInfo = useDeleteInfo();

  // const deleteInfoFromRegister = () => {
  //   deleteInfo(Infoid, InfoData.Infoid);
  //   setTimeout(() => setFetch(true), 500);
  //   toggleInfoDetails(false);
  // };

  const handleClick = () => {
    // history.push('/')
    // islogged(false)
  };

  const toggle = () => setOpen(!open);
  const handleSelectChange = ({ target: { value } }) => {
    setFocusAfterClose(JSON.parse(value));
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get("http://localhost:5000/travelers");
        setTravelers(res.data.data);
        console.log(res.data.data[0]);
      } catch (err) {
        console.log("error fetching travelers", err);
      }
    })();
  }, []);

  const handleChange = (key) => (e) => {
    setTraveler({
      ...traveler,
      [key]: e.target.value,
    });
  };

  const updateTraveler = async () => {
    const res = await axios.put(
      `http://localhost:5000/travelers/${traveler._id}`,
      traveler
    );

    if (res.status === 200) {
      const updatedTraveler = res.data.data;

      setTravelers(() =>
        travelers.map((traveler) =>
          traveler._id === updatedTraveler._id ? updatedTraveler : traveler
        )
      );
    }
  };

  const deleteTraveler = async (id) => {
    const res = await axios.delete(
      `http://localhost:5000/travelers/${id}`,
      traveler
    );

    if (res.status === 200) {
      setTravelers(() => travelers.filter(({ _id }) => _id !== id));
    }
  };

  const renderTravelers = () => {
    return (
      <Table
        striped
        bordered
        hover
        variant="dark"
        style={{
          marginTop: "2rem",
          width: "90%",
          marginLeft: "5%",
          backgroundColor: "	#00A36C",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <thead
          style={{
            border: "2px solid black ",
          }}
        >
          <tr
            style={{
              alignItems: "center",
            }}
          >
            <th>Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Age</th>
            <th style={{ border: "none" }}>Operations</th>
          </tr>
        </thead>
        <tbody>
          {travelers.map((traveler, index) => (
            <>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{traveler.FirstName}</td>
                <td>{traveler.LastName}</td>
                <td>{traveler.Email}</td>
                <td>{traveler.Gender}</td>
                <td>{traveler.PhoneNumber}</td>
                <td>{traveler.Age}</td>
                <td>
                  <Button
                    onClick={() => {
                      toggle();
                      setTraveler(traveler);
                    }}
                    style={{ backgroundColor: "#000080" }}
                  >
                    Update
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => deleteTraveler(traveler._id)}
                    style={{ backgroundColor: "#800000" }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    );
  };

  const renderModal = () => {
    return (
      <Modal isOpen={open}>
        <ModalBody
          style={{
            width: "45rem",
            backgroundColor: "#1f75fe",
            height: "20rem",
          }}
        >
          <FormGroup
            style={{
              marginTop: "1rem",
              display: "flex",
              width: "100%",
            }}
          >
            <div style={{ marginLeft: "10%", width: "100%" }}>
              <Input
                type="Text"
                marginLeft="4rem"
                value={traveler.FirstName}
                onChange={handleChange("FirstName")}
              />
            </div>
            <div
              style={{
                marginLeft: "10%",
                width: "100%",
                marginRight: "10%",
              }}
            >
              <Input
                type="Text"
                value={traveler.LastName}
                onChange={handleChange("LastName")}
              />
            </div>
          </FormGroup>
          <FormGroup style={{ marginTop: "2rem", display: "flex" }}>
            <Input
              style={{ width: "93%", marginLeft: "10%" }}
              type="email"
              name="email"
              id="gmail"
              value={traveler.Email}
              onChange={handleChange("Email")}
            />
            <div
              style={{
                marginLeft: "10%",
                width: "100%",
                marginRight: "10%",
                color: "white",
              }}
            >
              {" "}
              <FormGroup onChange={handleChange("Gender")}>
                <Input
                  type="radio"
                  name="Male"
                  checked={traveler.Gender === "Male"}
                  value="Male"
                />
                <span>Male</span>
                <Input
                  type="radio"
                  name="Female"
                  checked={traveler.Gender === "Female"}
                  style={{ marginLeft: "15%" }}
                  value="Female"
                />
                <span>Female</span>
              </FormGroup>
            </div>
          </FormGroup>
          <FormGroup style={{ marginTop: "2rem", display: "flex" }}>
            <Input
              style={{ width: "93%", marginLeft: "10%" }}
              type="number"
              value={traveler.PhoneNumber}
              onChange={handleChange("PhoneNumber")}
            />
            <div
              style={{
                marginLeft: "10%",
                width: "100%",
                marginRight: "10%",
              }}
            >
              <Input
                type="number"
                name="age"
                value={traveler.Age}
                onChange={handleChange("Age")}
              />
            </div>
          </FormGroup>
        </ModalBody>

        <ModalFooter
          style={{
            width: "45rem",
            backgroundColor: "#1f75fe",
          }}
        >
          <Button
            color="success"
            onClick={() => {
              updateTraveler();
              toggle();
            }}
          >
            Save
          </Button>
          <Button style={{ backgroundColor: "#002fa7" }} onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  };

  return (
    <div>
      <div style={{ color: "black" }}>.</div>
      <Form
        className="register-form"
        style={{
          height: "150vh",
          textAlign: "start",
          backgroundColor: "	#F5F5F5",
          display: "flex",
          flexDirection: "column",
          marginLeft: "25%",
          marginTop: "2rem",
          //   position: "relative",
          width: "60%",
          borderRadius: "2%",
        }}
      >
        <FormGroup
          style={{
            position: "relative",
            marginTop: "3%",
            display: "flex",
            marginLeft: "87%",
            backgroundColor: "orange",
            width: "2rem",
          }}
        >
          <Button
            onClick={handleClick}
            style={{
              backgroundColor: "red",
            }}
          >
            logout
          </Button>
        </FormGroup>
        <div
          style={{
            marginLeft: "43%",
            marginTop: "3rem",
            fontSize: "1.5rem",
          }}
        >
          Tourist Information
        </div>

        <FormGroup style={{ marginTop: "2rem", display: "flex" }}>
          <div style={{ marginLeft: "30%", width: "100%" }}>
            <Input type="Text" placeholder="Search Tourist" />
          </div>
          <div
            style={{
              marginLeft: "1%",
              width: "100%",
              marginRight: "10%",
            }}
          >
            <Button style={{ backgroundColor: "#000080" }}>Search</Button>
          </div>
        </FormGroup>

        {travelers && renderTravelers()}
        {open && renderModal()}
      </Form>
    </div>
  );
}

export default Attendance;

// import React from "react";
// import "./style.css";
// function attendance() {
//   return (
//     <>
//       <div className="attendance">
//         <div className="travels-list">
//           <h4 className="head-list">Travelers Attendance</h4>
//           <input type="text" placeholder="Add Passenger" />
//           <button>Submit</button>
//           <table responsive>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 {Array.from({ length: 12 }).map((_, index) => (
//                   <th key={index}>Table heading</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1</td>
//                 {Array.from({ length: 12 }).map((_, index) => (
//                   <td key={index}>Table cell {index}</td>
//                 ))}
//               </tr>
//               <tr>
//                 <td>2</td>
//                 {Array.from({ length: 12 }).map((_, index) => (
//                   <td key={index}>Table cell {index}</td>
//                 ))}
//               </tr>
//               <tr>
//                 <td>3</td>
//                 {Array.from({ length: 12 }).map((_, index) => (
//                   <td key={index}>Table cell {index}</td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// export default attendance;
