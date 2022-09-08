
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="app-wrapper">
      <h1>My Todos</h1>

      <Todo 
        title={'Learn React'}  
      />

      <Todo 
        title={'Learn Angular'}  
      />

      <Todo 
        title={'Learn Vue'}  
      />

    </div>
  );
}

export default App;
