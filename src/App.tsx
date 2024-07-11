import "./App.css";
import Alert from "./components/ui/Alert";
import { Ban } from "lucide-react";
function App() {
  return (
    <>
      <Alert
        type="alert-default"
        icon={<Ban size={20} />}
        title="Something went wrong"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vel
          quisquam distinctio fugit doloremque praesentium deserunt quaerat. A,{" "}
          <a href="/">accusantium debitis?</a>
        </p>
      </Alert>
      <Alert
        type="alert-danger"
        icon={<Ban size={20} />}
        title="Something went wrong"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vel
              quisquam distinctio fugit doloremque praesentium deserunt quaerat."
      />
      <Alert
        type="alert-info"
        icon={<Ban size={20} />}
        title="Something went wrong"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vel
              quisquam distinctio fugit doloremque praesentium deserunt quaerat."
      />
      <Alert
        type="alert-wrong"
        icon={<Ban size={20} />}
        title="Something went wrong"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vel
              quisquam distinctio fugit doloremque praesentium deserunt quaerat."
      />
      <Alert
        type="alert-success"
        icon={<Ban size={20} />}
        title="Something went wrong"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vel
              quisquam distinctio fugit doloremque praesentium deserunt quaerat."
      />
    </>
  );
}

export default App;
