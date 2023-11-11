import { useEffect, useState } from "react";
import { MdExpand } from "react-icons/md";
import { BsArrowsCollapse } from "react-icons/bs";
import { AiOutlineSelect, AiOutlineImport } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  changeCurrentLayout,
  changeSingleLayout,
} from "../redux/slices/layoutCategory";

const ViewLayout = ({
  width,
  height,
  shortName,
  layoutName,
  viewUrl,
  selected,
}) => {
  const [seclect, setSeclect] = useState(false);
  const [layoutExpand, setLayoutExpand] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLayoutExpand(selected);
    setSeclect(selected);
  }, [selected]);

  // console.log("layout", layoutExpand);
  // console.log("redux state", selected);

  return (
    <div
      style={{ width: width + 32, height: "auto" }}
      className="hover:bg-slate-200 bg-slate-100 rounded-lg group"
    >
      <div className="flex justify-between py-4 px-6 text-slate-600">
        <p className="font-semibold text-xl text-center">
          {
            shortName &&
            <span className="px-2 py-1 group-hover:bg-emerald-500 group-hover:text-white bg-slate-50 rounded-md me-2 border border-slate-300">
              {shortName} :
            </span>
          }
          {layoutName} view ({width} x {height})
        </p>

        <div>
          {!seclect && (
            <button
              className="border transition ease-in hover:border-gray-500 px-1.5 py-1.5 rounded-full"
              onClick={() => setLayoutExpand(!layoutExpand)}
            >
              {layoutExpand ? <BsArrowsCollapse /> : <MdExpand />}
            </button>
          )}

          <button
            className=""
            onClick={() => {
              setSeclect(!seclect);

              seclect
                ? dispatch(changeCurrentLayout())
                : dispatch(changeSingleLayout(layoutName));
            }}
          >
            {seclect ? <AiOutlineImport /> : <AiOutlineSelect />}
          </button>
        </div>
      </div>

      <div
        className="mx-auto mb-4 transition-all duration-200 origin-top"
        style={{ width, height: layoutExpand ? 665 : height }}
      >
        <iframe
          src={viewUrl}
          className={`w-full h-full border bg-white rounded-md`}
        ></iframe>
      </div>
    </div>
  );
};

export default ViewLayout;
