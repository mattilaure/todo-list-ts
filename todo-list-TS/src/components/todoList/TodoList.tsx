
import { List } from 'antd';

//components
import Button from "../button/Button";

interface TodoListProps {
  data: Array<{ id: number, content: string; completed: boolean; }>;
  onChangeData?: (data: Array<{ id: number, content: string; completed: boolean; }>) => void;
  onRemoveData?: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ data, onChangeData, onRemoveData }) => {


  const handleComplete = (index: number): void => {
    const cloneData = [...data];
    cloneData[index].completed = !cloneData[index].completed;
    if (onChangeData) onChangeData(cloneData);
  }

  const handleRemove = (index: number): void => {
    if (onRemoveData) onRemoveData(index);
  }
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item
            key={item.id}
            className={item.completed ? "item-completed" : ""}
            extra={
              <div style={{ display: "flex", gap: "10px" }}>
                <Button label={item.completed ? "Rimetti in sospeso" : "Segna come completato"} variant="solid" color="cyan" onClick={() => handleComplete(index)} />
                <Button label="Rimuovi" variant="solid" color="danger" onClick={() => handleRemove(index)} /></div>
            }
          >
            <p className={item.completed ? "line-through" : ""} style={{ fontSize: '20px', textAlign: "start" }}>{item.content}</p>
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoList