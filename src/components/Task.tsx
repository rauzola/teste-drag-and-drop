import { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ITask } from "./Interfaces";
import * as S from "./styles";

interface Props {
  task: ITask;
  index: number;
}

const Task = ({ task, index }: Props) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(draggableProvided, draggableSnapshot) => (
        <S.TaskItem
          {...draggableProvided.draggableProps}
          {...draggableProvided.dragHandleProps}
          ref={draggableProvided.innerRef}
          isDragging={draggableSnapshot.isDragging}
        >
          <S.WrapperItem>
                  <S.WrapperTitle>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <h2>{task.type} {task.id}</h2>
                      <p>{task.operation}</p>
                      
                    </div>
                  </S.WrapperTitle>

                  <h3>{task.name}</h3>
                </S.WrapperItem>
        </S.TaskItem>
      )}
    </Draggable>
  );
};

export default memo(Task);
