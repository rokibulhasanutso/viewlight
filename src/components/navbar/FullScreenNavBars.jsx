import { useSelector } from "react-redux";
import LayoutViewLink from "../LayoutViewLink";
import Logo from "../Logo";
import FullScreenButton from "../button/FullScreenButton";
import { useState } from "react";

const FullScreenNavBars = () => {
  const [inputFocus, setInputFocus] = useState(false);
  const { fullScreenStatus } = useSelector((state) => state.layoutCategory);

  const urlInputFocus = () => {
    console.log("URL INPUT FOCUSED!");

    setInputFocus(true);
  };

  const urlInputBlur = () => {
    console.log("URL INPUT BLURED!");

    setInputFocus(false);
  };

  return (
    <div
      className={`absolute left-1/2 py-4 ${
        inputFocus
          ? ""
          : "-top-[75px] hover:top-0 hover:delay-0 delay-500 bg-gray-500/50"
      } transition-all duration-300 rounded-lg transform -translate-x-1/2 hover:bg-transparent`}
    >
      <div className="flex items-center space-x-4 px-4 py-2 bg-gray-800 rounded-full">
        <Logo />
        <LayoutViewLink whenFocus={urlInputFocus} whenBlur={urlInputBlur} />
        <FullScreenButton fullScreenStatus={fullScreenStatus} />
      </div>
    </div>
  );
};

export default FullScreenNavBars;
