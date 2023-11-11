import { BsArrowsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { layoutFullScreen } from "../../redux/slices/layoutCategory";
import { useDispatch } from 'react-redux';
import { Tooltip } from "react-tooltip";

const FullScreenButton = ({fullScreenStatus}) => {

    const dispatch = useDispatch()

  return (
    <button
      onClick={() => dispatch(layoutFullScreen(!fullScreenStatus))}
      className="relative text-lg cursor-pointer group tooltip tooltip-fullscreen hover:text-emerald-500 text-slate-500"
    >
      {fullScreenStatus ? (
        <span className="inline-block group-hover:scale-125 transform">
          <BsFullscreenExit style={{ strokeWidth: 1 }} />
        </span>
      ) : (
        <span className="inline-block group-hover:scale-125 transform">
          <BsArrowsFullscreen />
        </span>
      )}

      <Tooltip
        anchorSelect=".tooltip-fullscreen"
        className="tooltip-ref"
        content={fullScreenStatus ? "Fullscreen Exit" : "Fullscreen"}
      />
    </button>
  );
};

export default FullScreenButton;
