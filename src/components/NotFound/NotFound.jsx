import NotFoundImage from "../../assets/notFound.jpg";

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center w-full z-0">
      <img
        className="w-[50%] md:w-[25%] rounded-full md:mb-28"
        src={NotFoundImage}
        alt="not-found"
      />
    </div>
  );
};

export default NotFound;
