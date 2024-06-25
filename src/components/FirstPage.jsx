import { useElement } from "../context/ElementContext";
import { useNavigate } from "react-router-dom";

function FirstPage() {
  const { setElement } = useElement();
  const navigate = useNavigate();

  const handleClick = () => {
    setElement("Halo dari Halaman Pertama!");
    // navigate("/second");
  };

  return (
    <div>
      <button onClick={handleClick}>Tampilkan Elemen</button>
    </div>
  );
}

export default FirstPage;
