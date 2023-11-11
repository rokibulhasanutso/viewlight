import { useState } from 'react';

const App2 = () => {
  const [isBig, setIsBig] = useState(false);
  const [is2Big, setIs2Big] = useState(false);

  const toggleSize = () => {
    setIsBig((prevIsBig) => !prevIsBig);
  };

  return (
    <div>
      <div
        className={`box ${isBig ? 'big' : 'small'}`}
        onClick={toggleSize}
      ></div>

      <div
        className={`bg-green-500 transition-all ease-out duration-500  ${is2Big ? 'w-96 h-96' : 'w-28 h-28'}`}
        onClick={() => setIs2Big(!is2Big)}
      ></div>
    </div>
  );
};

export default App2;
