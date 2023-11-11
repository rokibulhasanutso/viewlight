const Logo = ({size}) => {
  return (
    <>
      <p className={`uppercase font-bold text-gray-500 ${size} flex items-center`}>
        view
        <span className="ms-2 px-1.5 py-0.5 text-white rounded-md bg-emerald-500">
          lite
        </span>
      </p>
    </>
  );
};

export default Logo;
