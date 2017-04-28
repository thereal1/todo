import firebase, {firebaseRef} from 'app/firebase/';
import moment from 'moment';

export let setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  }
};

export let addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  }
};

export let startAddTodo = (text) => {
  return (dispatch, getState) => {
    let todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    let todoRef = firebaseRef.child('todos').push(todo);
    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }))
    })
  };
};

export let addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export let startAddTodos = () => {
  return (dispatch, getState) => {
    let todosRef = firebaseRef.child('todos');
    return todosRef.once('value').then((snapshot) => {
      let todos = snapshot.val() || {};
      let parsedTodos = [];

      Object.keys(todos).forEach((todoID) => {
        parsedTodos.push({
          id: todoID,
          ...todos[todoID]
        });
      });
      dispatch(addTodos(parsedTodos));
    })
  }
};

export let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  }
};

export let updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  }
};

export let startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    let todoRef = firebaseRef.child(`todos/${id}`);
    const updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    }
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates))
    })
  };
}
