import { useDispatch, useSelector } from "react-redux";
import { setUrlInputValue, setViewUrl } from "../redux/slices/layoutCategory";
// import { useState } from "react";

const LayoutViewLink = ({whenFocus, whenBlur}) => {
  // const [urlInputValue, setUrlInputValue] = useState("");
  const { viewUrl, urlInputValue } = useSelector((state) => state.layoutCategory);
  const dispatch = useDispatch();

  const handleUrlInputChange = (event) => {
    const urlValue = event.target.value;

    const validUrlValue =
      urlValue.startsWith("http://") || urlValue.startsWith("https://")
        ? urlValue
        : `${
            urlValue.startsWith("localhost") ? "http://" : "https://"
          }${urlValue}`;

    dispatch(setUrlInputValue(validUrlValue));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("handleSubmit");

    dispatch(setViewUrl(urlInputValue));
  };

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
          value={
            urlInputValue.startsWith("https://") ||
            urlInputValue.startsWith("http://")
              ? urlInputValue.startsWith("http://")
                ? urlInputValue.slice(7)
                : urlInputValue.slice(8)
              : urlInputValue
          }
          className={`outline-0 w-full bg-transparent font-semibold text-slate-500`}
          onChange={handleUrlInputChange}
          onFocus={whenFocus}
          onBlur={whenBlur}
          style={{
            width:
              urlInputValue.length * 8 > 200 ? urlInputValue.length * 8 : 200,
          }}
        />
        <input
          role="button"
          type="submit"
          value={
            viewUrl === (urlInputValue ? urlInputValue : null)
              ? "RUNNING"
              : "GO"
          }
          className={`p-1.5 ${
            viewUrl === (urlInputValue ? urlInputValue : null)
              ? "px-2 py-2 text-sm select-none cursor-not-allowed"
              : ""
          } font-semibold rounded-full ${
            urlInputValue
              ? "bg-emerald-500 text-white"
              : "text-slate-500 bg-emerald-100 pointer-events-none select-none"
          }`}
        />
      </form>
    </div>
  );
};

export default LayoutViewLink;
