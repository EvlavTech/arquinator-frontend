import React from 'react';
import {
  FaFolder,
  FaRegCheckCircle,
  FaCheck,
  FaEye,
  FaTrash,
} from 'react-icons/fa';

import { Progress } from 'antd';
import 'antd/lib/progress/style/index.css';
import MainLayout from 'components/MainLayout';
import MainCard from 'components/MainCard';
import dropDown from 'assets/dropDown.svg';

import testJson from 'assets/mock/projects-test.js';
import Project from './Project';
import type { componentType } from './Project';

import style from './Projects.module.scss';

const Projects: React.FC = () => {
  const mediaSize = window.innerWidth;

  function truncate(text: string) {
    if (mediaSize < 900 && text.length > 7) {
      return `${text.substr(0, 7)}...`;
    }

    return text;
  }

  function hideComponent(component: string) {
    const element = document.getElementById(component);
    const children = element?.children;

    if (children !== undefined) {
      for (let i = 0; i < children?.length; i += 1) {
        const liElement = children[i];
        const liElementState = liElement.getAttribute('hidden');

        if (liElementState === null) {
          liElement?.setAttribute('hidden', '');
        } else {
          liElement?.removeAttribute('hidden');
        }
      }
    }
  }

  function generateComponent(projectComponent: componentType) {
    const id = Math.random().toString();
    const haveTasks = projectComponent.tasks !== null;

    const component = (
      <li className={style.liStyle} id={id}>
        <div className={style.liInformation}>
          <div className={style.leftIcons}>
            <img src={dropDown} alt="tree" />
            <FaRegCheckCircle
              className={
                projectComponent.done ? style.completedSvg : style.none
              }
            />
            <p
              className={projectComponent.done ? style.completedP : style.none}
            >
              {truncate(projectComponent.name)}
            </p>
          </div>

          <div className={style.rigthIcons}>
            <FaCheck />
            {haveTasks ? <FaEye onClick={() => hideComponent(id)} /> : null}
            <FaTrash />
          </div>
        </div>
        {haveTasks ? (
          <ul>{projectComponent.tasks.map((e) => generateComponent(e))}</ul>
        ) : null}
      </li>
    );

    return component;
  }

  function generateProjectView() {
    const projectTsx = [];
    for (let i = 0; i < testJson.projects.length; i += 1) {
      const projectComponent = Object.assign(
        new Project(),
        testJson.projects[i],
      );

      projectTsx.push(
        <ul className={style.project} id={projectComponent.name}>
          <div className={style.projectInformation}>
            <div className={style.leftIcons}>
              <FaFolder />
              <p>{truncate(projectComponent.name)}</p>
            </div>

            <div className={style.progress}>
              <Progress
                strokeColor={{
                  '0%': '#3b7b20',
                  '100%': '#87d068',
                }}
                percent={projectComponent.progress}
                trailColor="#d2d2d4"
                showInfo={false}
              />
            </div>

            <div className={style.rigthIcons}>
              <FaCheck />
              <FaEye onClick={() => hideComponent(projectComponent.name)} />
              <FaTrash />
            </div>
          </div>
          {projectComponent.tasks.map((e) => generateComponent(e))}
        </ul>,
      );
    }

    return projectTsx;
  }

  return (
    <MainLayout>
      <MainCard title="Projetos">{generateProjectView()}</MainCard>
    </MainLayout>
  );
};

export default Projects;
