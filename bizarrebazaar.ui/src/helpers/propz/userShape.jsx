import PropTypes from 'prop-types';

const userShape = PropTypes.shape({
  id: PropTypes.string,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  acctCreated: PropTypes.bool.isRequired,
  isSeller: PropTypes.bool.isRequired,
  userName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
});

export default { userShape };
