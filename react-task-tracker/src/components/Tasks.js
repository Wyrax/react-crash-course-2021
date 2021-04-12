import PropTypes from 'prop-types';
import { useState } from 'react';

const Tasks = ({ tasks }) => {

  return(
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  )
}

Tasks.defaultProps = {

}

Tasks.propTypes = {

}

export default Tasks;