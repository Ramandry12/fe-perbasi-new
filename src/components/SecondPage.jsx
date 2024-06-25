import { useElement } from "../context/ElementContext";

function SecondPage() {
  const { element } = useElement();

  return (
    <div>
      <h1>Elemen: {element}</h1>
    </div>
  );
}

export default SecondPage;
