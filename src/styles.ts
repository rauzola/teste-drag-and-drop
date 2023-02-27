import styled from 'styled-components';

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
