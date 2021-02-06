import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { AiFillFolder, AiFillCalendar, AiOutlineUser } from 'react-icons/ai';
import PropTypes from 'prop-types';

import styles from './TaskCard.module.scss';

const TaskCard = ({ task, index }) => (
  <Draggable key={`${task.id}`} draggableId={`${task.id}`} index={index}>
    {(itemProvided) => (
      <div
        className={styles.container}
        ref={itemProvided.innerRef}
        {...itemProvided.draggableProps}
        {...itemProvided.dragHandleProps}
      >
        <div className={styles.title}>{task.name}</div>
        <div className={styles.details}>
          <div className={styles.clientName}>
            <AiFillFolder className={styles.icon} />
            <span>{task?.project?.name}</span>
          </div>
          <div className={styles.date}>
            <AiFillCalendar className={styles.icon} />
            <span>
              {task.end_date &&
                new Date(task.end_date).toLocaleDateString('pt-BR', {
                  formatMatcher: 'basic',
                })}
            </span>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.people}>
            <AiOutlineUser className={styles.icon} />
            <span>{task?.responsible?.name}</span>
          </div>
        </div>
      </div>
    )}
  </Draggable>
);

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    project: PropTypes.shape({
      name: PropTypes.string,
    }),
    owner: PropTypes.shape({
      name: PropTypes.string,
    }),
    end_date: PropTypes.string,
    responsible: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default TaskCard;

// task.end_date.toLocaleDateString('pt-BR', {
//                   formatMatcher: 'basic',
//                 })
