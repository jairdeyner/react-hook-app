import { useRef } from "react";

export const FocusScreen = () => {
  const inputRef = useRef(null);

  return (
    <>
      <h1>FocusScreen</h1>
      <hr />

      <input
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
        ref={inputRef}
      />

      <button
        onClick={() => inputRef.current.select()}
        className="btn btn-primary mt-2"
      >
        Set focus
      </button>
    </>
  );
};
