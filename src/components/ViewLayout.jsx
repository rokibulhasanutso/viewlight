import { useState } from "react";
import { MdExpand } from "react-icons/md";
import { BsArrowsCollapse } from "react-icons/bs";
import { AiOutlineSelect, AiOutlineImport } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  changeCurrentLayout,
  changeSingleLayout,
} from "../redux/slices/layoutCategory";

const ViewLayout = ({ width, height, layoutName, viewUrl }) => {
  const [seclect, setSeclect] = useState(false);

  const [layoutExpand, setLayoutExpand] = useState({ height, expand: false });
  const dispatch = useDispatch();

  // console.log(layoutExpand);

  return (
    <div
      style={{ width: width + 32, height: "auto" }}
      className="bg-slate-200 rounded-lg"
    >
      <div className="flex justify-between py-4 px-6 text-slate-600">
        <p className="font-semibold text-xl text-center ">
          {layoutName} view ({width} x {layoutExpand.height})
        </p>

        <div>
          <button
            className="border transition ease-in hover:border-gray-500 px-1.5 py-1.5 rounded-full"
            onClick={() =>
              layoutExpand.expand
                ? setLayoutExpand({
                    height: height,
                    expand: !layoutExpand.expand,
                  })
                : setLayoutExpand({
                    height: 665,
                    expand: !layoutExpand.expand,
                  })
            }
          >
            {layoutExpand.expand ? <BsArrowsCollapse /> : <MdExpand />}
          </button>

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
        style={{ width, height: layoutExpand.height }}
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
