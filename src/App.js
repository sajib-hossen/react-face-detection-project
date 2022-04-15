import { useRef } from "react";
import "./app.css";

function App() {
  const imgRef = useRef();
  const canvasRef = useRef();
  return (
    <div className="app">
      <img
        ref={imgRef}
        src="https://images.pexels.com/photos/160628/girls-lavender-two-dresses-160628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        width="940"
        height="650"
      />
      <canvas ref={canvasRef} width="940" height="650" />
    </div>
  );
}

export default App;
