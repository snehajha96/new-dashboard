import React, { useState } from "react";

// import "../../scss/accordion.scss";

import { Accordion, Card, Button } from "react-bootstrap";

const AccordionComponent = () => {
  // let indexPlus;

  // const [active, setActive] = useState(0);

  // const eventHandler = (e, index) => {
  //   e.preventDefault();
  //   setActive(index);
  // };

  // const indexCount = (index) => {
  //   indexPlus = index + 1;
  //   return indexPlus;
  // };

  return (
    <div className="conatiner">
      <div className="row p-3 ">
        {/* <div className="col-6">
          <div className="content">
            <form>
              {data.map((tab, index) => (
                <div key={index}>
                  <h3>
                    <button
                      onClick={(e) => eventHandler(e, index)}
                      className={active === index ? "active" : "inactive"}
                      aria-expanded={active === index ? "true" : "false"}
                      aria-controls={"sect-" + indexCount(index)}
                      aria-disabled={active === index ? "true" : "false"}
                      tabIndex={indexCount(index)}
                    >
                      <span className="title-wrapper">
                        {tab.title}
                        <span
                          className={active === index ? "plus" : "minus"}
                        ></span>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={"sect-" + indexCount(index)}
                    className={active === index ? "panel-open" : "panel-close"}
                  >
                    {tab.description}
                  </div>
                </div>
              ))}
            </form>
          </div>
        </div> */}
        <div className="col-md-10 col-lg-5 shadow p-3 mb-5 bg-white rounded">
          <div className="heading mb-3">
            <h4>Basic Accordion</h4>
          </div>
          <div className="accordion-body ">
            <Accordion defaultActiveKey="0" className="mt-5">
              <Card className="mb-3 border">
                <Card.Header className="p-0">
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    Accordion group #1
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Card.Header className="p-0">
                  <Accordion.Toggle
                    as={Button}
                    className=""
                    variant="link"
                    eventKey="1"
                  >
                    Accordion group #2
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>

        <div className="col-sm-12 col-lg-5 shadow p-3 ml-lg-5 mb-5 bg-white rounded">
          <div className="heading">
            <h4>Entire Head Clickable</h4>
          </div>
          <div className="accordion-body">
            <Accordion defaultActiveKey="0" className="mt-5">
              <Card>
                <Accordion.Toggle className="bg-info" as={Card.Header} eventKey="0">
                  Accordion Group #1
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card >
                <Accordion.Toggle className="bg-info" as={Card.Header} eventKey="1">
                  Accordion Group #2
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>

        <div className="col-sm-12 col-lg-5 shadow p-3 mb-5  bg-white rounded">
          <div className="heading">
            <h4>Accordion with Icon </h4>
          </div>
          <div className="accordion-body">
            <Accordion defaultActiveKey="0" className="mt-5">
              <Card >
                <Accordion.Toggle className="bg-info" as={Card.Header} eventKey="0">
                  Accordion Group #1
                  <span className="fas fa-angle-left float-right"></span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card >
                <Accordion.Toggle className="bg-info" as={Card.Header} eventKey="1">
                  Accordion Group #2
                  <span className="fas fa-angle-left float-right"></span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>Hello! I'm another body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionComponent;
