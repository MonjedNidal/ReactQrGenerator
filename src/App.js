import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App container">
      {/* <h2 className="h2">Monjed's Qr Generator</h2> */}
      <body className="justify-content-center align-items-center">
        <MyForm />
      </body>
    </div>
  );
}

export default App;
