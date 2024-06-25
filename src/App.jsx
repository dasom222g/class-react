import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <div
        style={{ border: "1px solid red", width: "400px", textAlign: "center" }}
      >
        <span style={{ display: "block", padding: "10px 0" }}>
          Are you sure?
        </span>
        {/* <div className="flex gap-1 justify-center">
          <Button text={"Cancel"} />
          <Button text={"Delete"} color={"bg-red-500"} />
        </div> */}
        {/* Counter */}
        <Counter />
      </div>
    </div>
  );
}

export default App;
