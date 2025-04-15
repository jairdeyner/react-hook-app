import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const onMouseMouse = ({ x, y }) => {
      const cords = { x, y };

      console.log(cords);
    };

    window.addEventListener("mousemove", onMouseMouse);

    return () => {
      window.removeEventListener("mousemove", onMouseMouse);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
};
