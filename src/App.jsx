import PublicGists from './components/PublicGists.jsx';
import UserGists from './components/UserGists.jsx';
import { useAccordion } from './hooks/useAccordion.js';

function App() {
  const { isOpen, toggle } = useAccordion(true);

  return (
    <div style={{ padding: '20px' }}>
      <h1>React Custom Hooks Lab</h1>
      <button onClick={toggle}>
        {isOpen ? 'Ocultar Listas' : 'Mostrar Listas'}
      </button>
      
      {isOpen && (
        <div style={{ marginTop: '20px' }}>
          <PublicGists />
          <hr />
          <UserGists />
        </div>
      )}
    </div>
  );
}

export default App;