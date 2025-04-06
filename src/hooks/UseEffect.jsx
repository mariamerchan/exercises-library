import { useEffect } from "react";

export const UseEffect = () => {
  useEffect(() => {
    document.title = "Change";
  }, []);

  return (
    <>
      <h1>UseEffect</h1>
    </>
  );
};
