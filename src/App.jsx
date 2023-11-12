import Navbar from "./components/navbar/Navbar";
import "./App.css";
import ViewLayout from "./components/ViewLayout";
import { useSelector } from "react-redux";
import FullScreenNavBars from "./components/navbar/FullScreenNavBars";

const App = () => {
  const { fullScreenStatus, viewUrl, layoutValue, layoutSelected } =
    useSelector((state) => state.layoutCategory);

  return (
    <>
      {fullScreenStatus ? (
        <div>
          <FullScreenNavBars/>
          <div className="w-screen h-screen ">
            <iframe src={viewUrl} className={`w-full h-full bg-white`}></iframe>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
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
        </div>
      )}
    </>
  );
};

export default App;
