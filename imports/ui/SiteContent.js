import React from 'react';
import { Session } from 'meteor/session';
import { withRouter } from 'react-router-dom';
import { Button, Carousel, Jumbotron, Grid, Row, Col, Image } from 'react-bootstrap';


export class SiteContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div className="page-content__main">
        <div>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
                      <div>
                here I will put more messages with a search bar, or search could go anywhere
                      </div>
              <div> within this i shall put welcome messages with pics of product </div>
            </p>
            <p>
              <Button bsStyle="primary">Learn more</Button>
            </p>
          </Jumbotron>;
        </div>
        <div className="page-content__grid-images">
          <Grid>
            <Row>
              <Col xs={6} md={4}>
                <Image src="/images/x.svg" rounded responsive />
              </Col>
              <Col xs={6} md={4}>
                <Image src="/images/x.svg" circle responsive />
              </Col>
              <Col xs={6} md={4}>
                <Image src="/images/x.svg" thumbnail responsive />
              </Col>
            </Row>
          </Grid>;
        </div>
      </div>
    );
  }
}

export default withRouter(SiteContent);