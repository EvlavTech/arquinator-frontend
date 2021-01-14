import { debug } from 'console';
import React, { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableLocation,
} from 'react-beautiful-dnd';

import styles from './ProjectBoard.module.scss';

const reorder = (list: any[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (
  sourceList: any[],
  destinationList: any[],
  source: DraggableLocation,
  destination: DraggableLocation,
) => {
  const sourceClone = Array.from(sourceList);
  const destClone = Array.from(destinationList);
  const [removed] = sourceClone.splice(source.index, 1);

  destClone.splice(destination.index, 0, removed);

  const result: any = {};
  result[source.droppableId] = sourceClone;
  result[destination.droppableId] = destClone;

  return result;
};

const ProjectBoard: React.FC = () => {
  const [tasksTodo, setTasksTodo] = useState(['Teste 1', 'Teste 2']);
  const [tasksDoing, setTasksDoing] = useState(['Teste 3', 'Teste 4']);
  const [tasksDone, setTasksDone] = useState(['Teste 5', 'Teste 6']);

  const boxSetList: any = {
    todo: { tasks: tasksTodo, setTasks: setTasksTodo },
    doing: { tasks: tasksDoing, setTasks: setTasksDoing },
    done: { tasks: tasksDone, setTasks: setTasksDone },
  };

  const onDragEnd = (result: DropResult) => {
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
          {(provided, snapshot) => (
            <div
              className={styles.box}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasksTodo.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(itemProvided, itemSnapshot) => (
                    <div
                      className={styles.task}
                      ref={itemProvided.innerRef}
                      {...itemProvided.draggableProps}
                      {...itemProvided.dragHandleProps}
                    >
                      {item}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="doing">
          {(provided, snapshot) => (
            <div
              className={styles.box}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasksDoing.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(itemProvided, itemSnapshot) => (
                    <div
                      className={styles.task}
                      ref={itemProvided.innerRef}
                      {...itemProvided.draggableProps}
                      {...itemProvided.dragHandleProps}
                    >
                      {item}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="done">
          {(provided, snapshot) => (
            <div
              className={styles.box}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasksDone.map((item, index) => (
                <Draggable key={item} draggableId={item} index={index}>
                  {(itemProvided, itemSnapshot) => (
                    <div
                      className={styles.task}
                      ref={itemProvided.innerRef}
                      {...itemProvided.draggableProps}
                      {...itemProvided.dragHandleProps}
                    >
                      {item}
                    </div>
                  )}
                </Draggable>
              ))}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ProjectBoard;
