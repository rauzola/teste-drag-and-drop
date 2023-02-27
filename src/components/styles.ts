import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const WrapperEmptyMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  text-align: center;

  p {
    max-width: 250px;
    text-align: center;
  }

  button {
    &:hover {
      color: #fff !important;
    }
  }
`;

export const WrapperItem = styled.div`
  text-transform: capitalize;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 2px solid #f0f1f1;
  border-radius: 4px;
  padding: 12px !important;

  height: 123px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  h3 {
    color: #333333;
    font-weight: 500;
    font-size: 14px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;

  padding: 0 !important;

  div {
    padding: 0 !important;
  }

  h2 {
    color: #8f9090;
    font-size: 16px;
    font-weight: 500;
  }

  p {
    color: #9d9f9f;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const DroppableWrapper = styled.div`
  flex-grow: 1;
  min-height: 100px;
  padding: 8px;
  background-color: white;
  :hover {
    background-color: orange;
  }
`;

export const WrapperItem1 = styled.div`
  display: flex;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 550px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const TaskListWrapper = styled.div`
  flex-grow: 1;
  min-height: 100px;
  padding: 10px;
  /* background-color: white;

  :hover {
    background-color: orange;
  } */
`;

export const ColumnHeader = styled.div`
  padding: 10px;
  font-size: 2rem;
`;

export const TaskItem = styled.div<{ isDragging: boolean }>`
  display: flex;
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #fefefe;
  border-radius: 4px;
 
`;
