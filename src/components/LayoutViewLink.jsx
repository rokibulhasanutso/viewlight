import { useDispatch, useSelector } from "react-redux";
import { setViewUrl } from "../redux/slices/layoutCategory";
import { useState } from "react";

const LayoutViewLink = () => {
  const [viewLink, setViewLink] = useState("");

  const { viewUrl } = useSelector((state) => state.layoutCategory);
  const dispatch = useDispatch();

//   if (!viewLink) {
//     dispatch(setViewUrl(viewLink));
//   }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);

    dispatch(setViewUrl(viewLink));
  };

    console.log(viewUrl);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="space-x-2 flex justify-between"
        noValidate
      >
        <input
          name="viewUrl"
          type="text"
          placeholder="https://www.exmple.com"
          value={viewLink || viewUrl}
          className={`outline-0 w-full font-semibold text-slate-500`}
          onChange={(event) => setViewLink(event.target.value)}
        />
        <input
          role="button"
          type="submit"
          value={"GO"}
          className={`p-1.5 font-semibold rounded-full ${
            viewLink
              ? "bg-emerald-500 text-white"
              : "text-slate-500 bg-emerald-100 pointer-events-none select-none"
          }`}
        />
      </form>
    </div>
  );
};

export default LayoutViewLink;
