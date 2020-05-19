import React from "react";
//react-bootstrap
import { Row, Col, Table, Container } from "react-bootstrap";
//assets
import portrait from "../../assets/portrait.jpg";

const Contact = () => {
  return (
    <Container className="col-12">
      <Row className="col-12">
        {/* Portrait Image */}
        <Col className="col-12 col-md-4">
          <hr />
          <Table responsive borderless size="sm">
            <tbody>
              <tr>
                <td className="pl-0 pr-0 basicDescriptionText">
                <img src={portrait}
             alt="image"
             width="300px"
             height="auto"
          />
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
          {/* Contact Table */}
        <Col className="col-12 col-md-4">
          <hr />
          <Table responsive borderless size="sm">
            <tbody>
              <tr>
                <td className="pl-0 pr-0 basicDescriptionText">
                  {" "}
                  <strong>Phone nr:</strong>
                </td>
                <td className="basicDescriptionText">074 41 914 555</td>
              </tr>
              <tr>
                <td className="pl-0 pr-0 basicDescriptionText">
                  {" "}
                  <strong>Email:</strong>
                </td>
                <td className="basicDescriptionText">studio@knvision.co.uk</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};
export default Contact;
