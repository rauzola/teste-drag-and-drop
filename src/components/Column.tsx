import { memo } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import TaskList from "./TaskList";
import { ITask } from "./Interfaces";
import { IColumn } from "./Interfaces";

import * as S from "./styles";

interface Props {
  column: IColumn;
  tasks: ITask[];
  index: number;
}

const Column = ({ column, tasks, index }: Props) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(draggableProvided, draggableSnapshot) => (
        <S.ColumnWrapper
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
        
        >
          <S.ColumnHeader {...draggableProvided.dragHandleProps}>
            {column.title}
          </S.ColumnHeader>
          <Droppable droppableId={column.id} type="task">
            {(droppableProvided, droppableSnapshot) => (
              <S.TaskListWrapper
                ref={droppableProvided.innerRef}
                {...droppableProvided.droppableProps}
               
              >
                <TaskList tasks={tasks} />
                {droppableProvided.placeholder}
              </S.TaskListWrapper>
            )}
          </Droppable>
        </S.ColumnWrapper>
      )}
    </Draggable>
  );
};

export default memo(Column);
