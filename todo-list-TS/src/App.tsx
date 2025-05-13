import './App.css'
import TodoList from './components/todoList/TodoList'
import Button from './components/button/Button'
import { useState } from 'react'
import Modal from './components/modal/Modal';
import TextArea from './components/textArea/TextArea';

function App() {

  const [data, setData] = useState<Array<{ id: number; content: string; completed: boolean; }>>([]);

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");

  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [deleteIndex, setDeleteIndex] = useState<number>(-1);

  const handleChangeListData = (data: Array<{ id: number; content: string; completed: boolean; }>): void => {
    setData(data);
  }

  const handleAddButtonClick = () => {
    setModalOpen(true);
    setDescription("");
  }

  const handleAdd = (): void => {
    const newData = [...data];
    newData.push({
      id: Date.now(),
      content: description,
      completed: false
    });
    setData(newData);
    setModalOpen(false);
  }

  const handleRemoveTodo = (): void => {
    const cloneData = [...data];
    cloneData.splice(deleteIndex, 1);
    setData(cloneData);
    setDeleteModalOpen(false);
  }

  const handleRemoveClick = (index: number): void => {
    setDeleteModalOpen(true);
    setDeleteIndex(index);
  }



  return (
    <>
      <h1 style={{ textAlign: "center", color: 'black' }}>Todo List</h1>
      <div style={{ textAlign: "end" }}>
        <Button label="Aggiungi" variant="solid" color="primary" onClick={handleAddButtonClick} />
      </div>
      <TodoList data={data} onChangeData={handleChangeListData} onRemoveData={(index) => handleRemoveClick(index)}/>
      <Modal
        title="Aggiungi todo"
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        onOk={handleAdd}
        centered
      >
        <TextArea label="Descrizione attività" content={description} onChange={(value) => setDescription(value)} />
      </Modal>

      <Modal
        title="Elimina todo"
        open={deleteModalOpen}
        onCancel={() => setDeleteModalOpen(false)}
        onOk={handleRemoveTodo}
        centered
      >
        <p>Sei sicuro di voler rimuovere questo todo?</p>
      </Modal>
    </>
  )
}

export default App
