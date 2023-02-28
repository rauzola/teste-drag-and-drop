import { DraggableCore, DraggableEvent } from "react-draggable";
import DraggableList from "react-draggable-lists";
import * as S from "./styles";

type Item = {
  id: string;
  operation: string;
  type: string;
  name: string;
};

type Props = {
  arr: Item[];
};

export function Teste(props: Props) {
  const handleDrag = (e: DraggableEvent, ui: any) => {
    ui.node.style.transform = `scale(0.8)`;
  };

  const handleStop = (e: DraggableEvent, ui: any) => {
    ui.node.style.transform = "";
  };
  console.log(props)

  return (
    <div className="container">
      <DraggableList width={220} height={150} rowSize={2}>
        {props.arr.map((item) => (
          <DraggableCore
            key={item.id}
            onDrag={handleDrag}
            onStop={handleStop}
          >
            <S.WrapperItem>
              <S.WrapperTitle>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h2>
                    {item.type} 
                  </h2>
                  <p>{item.operation}</p>
                </div>
              </S.WrapperTitle>

              <h3>{item.name}</h3>
            </S.WrapperItem>
          </DraggableCore>
        ))}
      </DraggableList>
    </div>
  );
}
