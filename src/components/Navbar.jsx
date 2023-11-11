import Logo from "./Logo";
import {
  BsArrowsFullscreen,
  BsFullscreenExit,
  BsLaptop,
  BsTabletLandscape,
} from "react-icons/bs";
import { RxMobile } from "react-icons/rx";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCategoryLayout,
  changeSingleLayout,
  layoutFullScreen,
} from "../redux/slices/layoutCategory";
import {
  bootstrapLayout,
  defaultLayout,
  tailwindLayout,
} from "../data/dataStore";
import LayoutViewLink from "./LayoutViewLink";

const Navbar = () => {
  const { initialValue, fullScreenStatus } = useSelector(
    (state) => state.layoutCategory
  );
  const dispatch = useDispatch();

  return (
    <div className="sticky top-0">
      <nav className="absolute w-full">
        <div className="flex justify-between px-10 py-4">
          <div>
            <div className="border rounded-full bg-white ps-3.5 pe-2 py-1.5 border-slate-400">
              <div className="flex gap-5 items-center">
                <Logo size={"text-xl"} />

                <LayoutViewLink />
              </div>
            </div>
          </div>

          <div className="flex gap-5 items-center">
            <button
              onClick={() => dispatch(layoutFullScreen(!fullScreenStatus))}
              className="relative text-lg cursor-pointer group tooltip tooltip-fullscreen hover:text-emerald-500 text-slate-500"
            >
              {fullScreenStatus ? (
                <span className="inline-block group-hover:scale-125 transform font-bold">
                  <BsFullscreenExit style={{strokeWidth: 1}}/>
                </span>
              ) : (
                <BsArrowsFullscreen />
              )}

              <Tooltip
                anchorSelect=".tooltip-fullscreen"
                className="tooltip-ref"
                content={fullScreenStatus ? "Fullscreen Exit" : "Fullscreen"}
              />
            </button>

            {!fullScreenStatus && (
              <>
                <div>
                  <ul className="flex items-center gap-3">
                    {initialValue.map(
                      ({ name, shortName, width, height }, index) => {
                        return (
                          <li
                            key={index}
                            onClick={() => dispatch(changeSingleLayout(name))}
                            className={`text-lg cursor-pointer uppercase tooltip tooltip-${(
                              shortName || name
                            )
                              .split(" ")
                              .join("-")}`}
                          >
                            {/* {console.log(name)} */}

                            {name === "Laptop" && <BsLaptop />}
                            {name === "Tablet" && <BsTabletLandscape />}
                            {name === "Mobile" && <RxMobile />}

                            {!defaultLayout
                              .map(({ name }) => name)
                              .includes(name) && (
                              <p className="hover:text-emerald-500 transform hover:scale-125 font-semibold text-slate-500">
                                {shortName || name}
                              </p>
                            )}

                            <Tooltip
                              anchorSelect={`.tooltip-${(shortName || name)
                                .split(" ")
                                .join("-")}`}
                              className="tooltip-ref capitalize"
                              content={`${name} ( ${width} x ${height} )`}
                            />
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>

                <div className=" bg-white">
                  <button
                    className="px-2.5 py-1.5 border"
                    onClick={() =>
                      dispatch(changeCategoryLayout(defaultLayout))
                    }
                  >
                    Default
                  </button>
                  <button
                    className="px-2.5 py-1.5 border"
                    onClick={() =>
                      dispatch(changeCategoryLayout(tailwindLayout))
                    }
                  >
                    Tailwind
                  </button>
                  <button
                    className="px-2.5 py-1.5 border"
                    onClick={() =>
                      dispatch(changeCategoryLayout(bootstrapLayout))
                    }
                  >
                    Bootstrap
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
