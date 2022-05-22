import React from 'react';
import PropTypes from 'prop-types';

const Robot = ({ robot: { id, name, username, email } }) => {
  return (
    <div>
      <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>
          {username} | {email}
        </p>
      </div>
    </div>
  );
};

Robot.propTypes = {
  robot: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default Robot;
