import { BoomBox } from "lucide-react";
import React, { useState } from "react";
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  InputGroup,
} from "react-bootstrap";
import { PartyPopper, CirclePlus } from "lucide-react";

function OnShow() {
  return (
    <Container fluid style={{ background: "#FDF1FF" }} className="p-5">
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={10} lg={8} xs={12}>
          <div className="border-3 border-danger border"></div>
          <Card className="shadow">
            <Card.Body>
              <div className="mb-3 mt-4">
                <h2
                  className="fw-bold text-uppercase mb-2 h1 text-center mb-3"
                  style={{
                    color: "#466ece",
                    fontFamily: "verdana",
                    fontWeight: "bolder",
                  }}
                >
                  {" "}
                  ADD New Post
                  <CirclePlus
                    size={40}
                    color={"#466ece"}
                    className="ml-1 pb-1"
                  />
                </h2>
                <p
                  className="mb-5 text-center"
                  style={{ fontFamily: "cursive" }}
                >
                  Please enter your details to post something!
                </p>
                <Form>
                  <Row className="mb-3">
                    <Form.Group controlId="formFile" className="mb-3">
                      <Form.Label>
                        Please choose one required image to Post...
                      </Form.Label>
                      <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formFullName"
                    >
                      <Form.Label className="text-center">
                        Enter full name
                      </Form.Label>
                      <Form.Control type="text" placeholder="Enter full name" />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formPhoneNumber"
                    >
                      <Form.Label>Enter time-Duration</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Enter time-Duration"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Enter Profession</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Profession"
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Label>Enter Address</Form.Label>
                      <Form.Control type="text" placeholder="Enter Address" />
                    </Form.Group>
                  </Row>
                  <div className="d-grid">
                    <Button variant="primary" type="submit">
                      Click to Post
                    </Button>
                  </div>
                </Form>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

// Exporting the component with the correct name
export function AddYourData() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <>
      {!show ? (
        <header>
          <div className="p-5 text-center bg-body-tertiary">
            <h1
              className="mb-3 text-primary"
              style={{ fontFamily: "verdana", fontWeight: "bold" }}
            >
              Do you really want to post something?
            </h1>
            <h6 className="mb-3 text-secondary">
              Please confirm before posting a new page
            </h6>
            <button
              data-mdb-ripple-init
              className="btn btn-success m-3 px-5"
              role="button"
              onClick={() => alert("No button clicked")}
            >
              NO
            </button>
            <button
              data-mdb-ripple-init
              className="btn btn-danger m-3 px-5"
              role="button"
              onClick={handleShow}
            >
              Yes
            </button>
          </div>
        </header>
      ) : (
        <OnShow />
      )}
    </>
  );
}
