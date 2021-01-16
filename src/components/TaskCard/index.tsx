import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { AiFillFolder, AiFillCalendar, AiOutlineUser } from 'react-icons/ai';

import { TaskModel } from 'models/Task';

import styles from './TaskCard.module.scss';

interface TaskCardProps {
  task: TaskModel;
  index: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, index }) => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
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
              <span>{task.projectName}</span>
            </div>
            <div className={styles.date}>
              <AiFillCalendar className={styles.icon} />
              <span>
                {task.endDate.toLocaleDateString('pt-BR', {
                  formatMatcher: 'basic',
                })}
              </span>
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.people}>
              <AiOutlineUser className={styles.icon} />
              <span>{task.responsible}</span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
