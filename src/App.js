import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyForm from "./components/MyForm";
import MyFooter from "./components/MyFooter";
function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div className=" test">
        <MyForm />
      </div>

      <MyFooter />
    </div>
  );
}

export default App;
