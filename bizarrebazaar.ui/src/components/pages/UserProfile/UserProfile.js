import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import {
  Collapse,
  Button,
  CardBody,
  Card,
} from 'reactstrap';
import './UserProfile.scss';

import userData from '../../../helpers/data/userData';

class UserProfile extends React.Component {
  state = {
    isOpen: false,
    setIsOpen: false,
  }
  // const [isOpen, setIsOpen] = useState(false);

  clickEvent = (props) => {
    const toggle = () => this.setState({ setIsOpen: true });
  }

  render() {
    const { toggle, isOpen } = this.state;
    const { userObj } = this.props;
    return (
    <div>
        <div>
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

export default { UserProfile };
