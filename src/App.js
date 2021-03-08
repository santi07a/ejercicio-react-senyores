
import "./index.css";

function App() {


  return (
    <>
      <header className="cabecera">
        <h1>Señores que te apuntan con el dedo</h1>
        <p className="totales"><span className="nmarcados">0</span> señores que te apuntan con el dedo marcados</p>
        <a className="accion-marcar" href="marcar-todos">Marcar todos</a>
      </header>
    </>
  );
}

export default App;
