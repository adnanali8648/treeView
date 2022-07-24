import logo from "./logo.svg";
import "./App.css";
import files from "./files.json";
import FileExplorer from "./components/FileExplorer";

function App() {
  return (
    <>
      <div className="spacing">
        <FileExplorer files={files} />
      </div>
    </>
  );
}

export default App;
