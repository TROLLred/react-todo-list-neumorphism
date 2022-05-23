import './styles/App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import TodoList from './components/UI/list/TodoList';
import MyForm from './components/UI/form/MyForm';
import MyHead from './components/UI/head/MyHead';

function App() {
  const [todos, setTodos] = useState([]);
  /*const [todos, setTodos] = useState([
    {id: 1, fixed: false, completed: true, body: 'Изучить JavaSript'},
    {id: 2, fixed: false, completed: true, body: 'Изучить ECMAScript'},
    {id: 3, fixed: false, completed: true, body: 'Изучить Git'},
    {id: 4, fixed: false, completed: true, body: 'Изучить React'},
    {id: 5, fixed: false, completed: false, body: 'Изучить Redux'},
    {id: 6, fixed: false, completed: false, body: 'Изучить WebPack'},
    {id: 7, fixed: true, completed: false, body: 'Устроиться на работу'}
  ]);*/

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter(td => td.id !== todo.id));
  };

  const replaceTodo = (dragIndex, dropIndex) => {
    const item = todos[dragIndex];
    setTodos([...todos.slice(0, dropIndex).filter(todo => todo.id !== item.id),
              item, 
              ...todos.slice(dropIndex, todos.length).filter(todo => todo.id !== item.id)]);
    /*removeTodo(item)*/ // почему-то не работает
    /*setTodos(todos.splice(dropIndex, 0, item));*/ //Этот мазок кала мутирует исходный массив, код багается и лист очищается под 0
    /* console.log(todos);*/ 
  };

  return (
    <div className="App">
      <Container className='page'>
        <Row>
          <Col lg={12}>
            <MyHead/>
          </Col>
        </Row>
        <Row>
          <Col lg={12} id='board'>
            <MyForm add={addTodo}/>
            <TodoList replace={replaceTodo} remove={removeTodo} todos={todos}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;