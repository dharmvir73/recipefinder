import ErrorImage from "../../assets/Erorr.jpg";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}
    >
      <img src={ErrorImage} alt="Error 404" style={{ width: "400px" }} />
    </div>
  );
};

export default Error;
