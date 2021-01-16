import React, { useState } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DraggableLocation,
} from 'react-beautiful-dnd';
import faker, { fake } from 'faker';

import { TaskModel } from 'models/Task';
import TaskCard from 'components/TaskCard';

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

const generateTask = (): TaskModel => {
  return {
    id: faker.random.alphaNumeric(5),
    name: faker.lorem.words(2),
    description: faker.lorem.paragraph(1),
    clientId: faker.random.number(),
    startDate: faker.date.recent(),
    endDate: faker.date.future(),
    projectName: `Projeto ${faker.name.firstName()}`,
    responsible: faker.name.findName(),
  };
};

const ProjectBoard: React.FC = () => {
  const [tasksTodo, setTasksTodo] = useState<TaskModel[]>([
    generateTask(),
    generateTask(),
  ]);
  const [tasksDoing, setTasksDoing] = useState([
    generateTask(),
    generateTask(),
  ]);
  const [tasksDone, setTasksDone] = useState([generateTask(), generateTask()]);

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
              className={styles.boxTask}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <span className={styles.title}>A fazer</span>
              <div className={styles.boxContainer}>
                {tasksTodo.map((task, index) => (
                  <TaskCard task={task} index={index} />
                ))}
              </div>
            </div>
          )}
        </Droppable>
        <hr className={styles.border} />
        <Droppable droppableId="doing">
          {(provided, snapshot) => (
            <div
              className={styles.boxTask}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <span className={styles.title}>Em execução</span>
              <div className={styles.boxContainer}>
                {tasksDoing.map((task, index) => (
                  <TaskCard task={task} index={index} />
                ))}
              </div>
            </div>
          )}
        </Droppable>
        <hr className={styles.border} />
        <Droppable droppableId="done">
          {(provided, snapshot) => (
            <div
              className={styles.boxTask}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <span className={styles.title}>Feito</span>
              <div className={styles.boxContainer}>
                {tasksDone.map((task, index) => (
                  <TaskCard task={task} index={index} />
                ))}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ProjectBoard;
