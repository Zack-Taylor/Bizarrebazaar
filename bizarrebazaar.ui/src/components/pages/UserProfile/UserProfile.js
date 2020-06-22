import React from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';
// import firebase from 'firebase/app';
import 'firebase/auth';
import {
  Collapse,
  Button,
  CardBody,
  Card,
} from 'reactstrap';
import './UserProfile.scss';

// import userData from '../../../helpers/data/userData';

class UserProfile extends React.Component {
  state = {
    isOpen: false,
  }

  propTypes = {
    ...Transition.propTypes,
    isOpen: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    className: PropTypes.node,
    navbar: PropTypes.bool,
    cssModule: PropTypes.object,
    innerRef: PropTypes.object,
  };

  toggle = () => {
    const toggleEvent = () => setIsOpen(!isOpen);
    const [isOpen, setIsOpen] = toggleEvent(true);
  }

  render() {
    const { toggle, isOpen } = this.state;
    const { userObj } = this.props;

    return (
    <div>
        <div className= "Collapse 1">
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Username</Button>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>
                {userObj.UserName}
              </CardBody>
            </Card>
          </Collapse>
        </div>
          <div>
          <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Email</Button>
          <Collapse isOpen={isOpen}>
            <Card>
              <CardBody>
                {userObj.email}
              </CardBody>
            </Card>
          </Collapse>
        </div>
        <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Password</Button>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              {userObj.password}
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </div>
    );
  }
}

export default UserProfile;
