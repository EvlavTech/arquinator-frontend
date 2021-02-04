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

import testJson from './project-test';

import style from './Projects.module.scss';

export default function Projects() {
  const mediaSize = window.innerWidth;

  function truncate(text) {
    if (mediaSize < 900 && text.length > 7) {
      return `${text.substr(0, 7)}...`;
    }

    return text;
  }

  function hideComponent(component) {
    const children = [...component.current.children];

    if (children !== undefined) {
      children.forEach((element) => {
        const liElementState = element.getAttribute('hidden');
        if (liElementState === null) {
          element.setAttribute('hidden', '');
        } else {
          element.removeAttribute('hidden');
        }
      });
    }
  }

  function generateComponent(projectComponent) {
    const id = Math.random().toString();
    const haveTasks = projectComponent.tasks !== null;
    const liRef = React.createRef();

    const component = (
      <li className={style.liStyle} id={id} ref={liRef}>
        <div className={style.liInformation}>
          <div className={style.leftIcons}>
            <img src={dropDown} alt="tree" />
            <FaRegCheckCircle
              size={22}
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
            <FaCheck size={22} />
            {haveTasks ? (
              <FaEye size={22} onClick={() => hideComponent(liRef)} />
            ) : null}
            <FaTrash size={22} />
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
    const projectJsx = testJson.projects.map((projectComponent) => {
      const projectRef = React.createRef();
      return (
        <ul className={style.project} ref={projectRef}>
          <div className={style.projectInformation}>
            <div className={style.leftIcons}>
              <FaFolder size={22} />
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
              <FaCheck size={22} />
              <FaEye size={22} onClick={() => hideComponent(projectRef)} />
              <FaTrash size={22} />
            </div>
          </div>
          {projectComponent.tasks.map((e) => generateComponent(e))}
        </ul>
      );
    });

    return projectJsx;
  }

  return (
    <MainLayout>
      <MainCard title="Projetos">{generateProjectView()}</MainCard>
    </MainLayout>
  );
}
