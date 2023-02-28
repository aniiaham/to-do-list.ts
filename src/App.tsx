import Todos from './components/Todos'; 
import Todo from './models/todo';

function App() {
  const todos = [new Todo('Learn TypeScript'), new Todo('Learn Taildwind CSS')];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
