import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RouteList from "./components/RouteList/RouteList";

library.add(fas, far);

function App() {
  return (
    <div className="App">
      <RouteList />
    </div>
  );
}

export default App;
