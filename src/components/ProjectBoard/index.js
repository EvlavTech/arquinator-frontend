import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskCard from 'components/TaskCard';
import { getAllTasks } from 'services/TaskService';

import styles from './ProjectBoard.module.scss';

// @TODO Move this to a util folder or something like that
/**
 * Change the position of a element from a list.
 *
 * @param list: []
 * @param startIndex: number
 * @param endIndex: number
 *
 * Return a new list with the element index changed .
 */
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

// @TODO Move this to a util folder or something like that
/**
 * Move a Draggable from a Droppable from another
 *
 * @param sourceList: any[]
 * @param destinationList: any[]
 * @param source: DraggableLocation
 * @param destination: DraggableLocation
 *
 * Return a new list with the element index changed .
 */
const move = (sourceList, destinationList, source, destination) => {
  const sourceClone = Array.from(sourceList);
  const destClone = Array.from(destinationList);
  const [removed] = sourceClone.splice(source.index, 1);

  destClone.splice(destination.index, 0, removed);

  const result = {};
  result[source.droppableId] = sourceClone;
  result[destination.droppableId] = destClone;

  return result;
};

const ProjectBoard = () => {
  const [tasksTodo, setTasksTodo] = useState([]);
  const [tasksDoing, setTasksDoing] = useState([]);
  const [tasksDone, setTasksDone] = useState([]);

  useEffect(async () => {
    const tasks = await getAllTasks();
    setTasksTodo(tasks);
  }, []);

  const boxSetList = {
    todo: { tasks: tasksTodo, setTasks: setTasksTodo },
    doing: { tasks: tasksDoing, setTasks: setTasksDoing },
    done: { tasks: tasksDone, setTasks: setTasksDone },
  };

  /**
   * Function that will be executed when the drag event is over.
   *
   * @param result: DropResult
   *
   * Reorder the order or Droppable of the taskCards, if necessary.
   */
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const { tasks, setTasks } = boxSetList[destination.droppableId];

      const newItems = reorder(tasks, source.index, destination.index);

      setTasks(newItems);
    } else {
      const { tasks: tasksSource, setTasks: setTasksSource } = boxSetList[
        source.droppableId
      ];
      const {
        tasks: tasksDestination,
        setTasks: setTasksDestination,
      } = boxSetList[destination.droppableId];

      const resultObject = move(
        tasksSource,
        tasksDestination,
        source,
        destination,
      );

      setTasksSource(resultObject[source.droppableId]);
      setTasksDestination(resultObject[destination.droppableId]);
    }
  };

  return (
    <div className={styles.container}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div
              className={styles.boxTask}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <span className={styles.title}>A fazer</span>
              <div className={styles.boxContainer}>
                {tasksTodo &&
                  tasksTodo.map((task, index) => (
                    <TaskCard key={task?.id} task={task} index={index} />
                  ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <hr className={styles.border} />
        <Droppable droppableId="doing">
          {(provided) => (
            <div
              className={styles.boxTask}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <span className={styles.title}>Em execução</span>
              <div className={styles.boxContainer}>
                {tasksDoing.map((task, index) => (
                  <TaskCard key={task?.id} task={task} index={index} />
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <hr className={styles.border} />
        <Droppable droppableId="done">
          {(provided) => (
            <div
              className={styles.boxTask}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <span className={styles.title}>Feito</span>
              <div className={styles.boxContainer}>
                {tasksDone.map((task, index) => (
                  <TaskCard key={task?.id} task={task} index={index} />
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ProjectBoard;
