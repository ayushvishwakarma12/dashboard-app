import NotFoundImage from "../../assets/notFound.jpg";

const NotFound = () => {
  return (
    <div className="h-screen flex justify-center items-center w-full">
      <img className="h-[500px] w-[500px] rounded-full" src={NotFoundImage} />
    </div>
  );
};

export default NotFound;
