import Navbar from "./components/Navbar";
import "./App.css";
import ViewLayout from "./components/ViewLayout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { layoutFullScreen } from "./redux/slices/layoutCategory";

const App = () => {
  // const dispatch = useDispatch();

  const { layoutValue, fullScreenStatus, viewUrl, layoutSelected } = useSelector(
    (state) => state.layoutCategory
  );

  // for fullScreen press esc button 
  // useEffect(() => {
  //   const escapeButtonPress = (event) => {
  //     if (event.key === "Esc") {
  //       dispatch(layoutFullScreen(!fullScreenStatus));
  //     }
  //   };

  //   document.addEventListener("keyup", escapeButtonPress);

  //   return () => document.removeEventListener("keyup", escapeButtonPress);
  // }, [fullScreenStatus, dispatch]);

  return (
    <>
      <div>
        <Navbar />
        {fullScreenStatus ? (
          <div className="w-screen h-screen ">
            <iframe
              src={viewUrl}
              className={`w-full h-full bg-white`}
            ></iframe>
          </div>
        ) : (
          <div className="pt-20 pb-56 flex flex-wrap justify-center items-center gap-10">
            {layoutValue.map(({ name, width, height, shortName }, index) => {
              return (
                <ViewLayout
                  key={index}
                  width={width}
                  height={height}
                  layoutName={name}
                  viewUrl={viewUrl}
                  shortName={shortName}
                  selected={layoutSelected}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
