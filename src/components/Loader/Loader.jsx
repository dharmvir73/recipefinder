import Loading from "../../assets/Loader.gif";

const Loader = () => {
  return (
    <div className="flex justify-center align-center py-20">
      <img src={Loading} alt="Loading" style={{ width: "100px" }} />
    </div>
  );
};

export default Loader;
