import PropTypes from 'prop-types';

const userShape = PropTypes.shape({
  id: PropTypes.string,
  FirstName: PropTypes.string.isRequired,
  LastName: PropTypes.string.isRequired,
  AcctCreated: PropTypes.bool.isRequired,
  IsSeller: PropTypes.bool.isRequired,
  UserName: PropTypes.string.isRequired,
  Email: PropTypes.string.isRequired,
  ImageUrl: PropTypes.string.isRequired,
  Password: PropTypes.string.isRequired,
});

export default { userShape };
