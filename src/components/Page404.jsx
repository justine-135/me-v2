const Page404 = () => {
  return (
    <div className="min-h-screen grid place-items-center">
      <div className="flex items-center">
        <div>
          <h1 className="font-extrabold text-xl dark:text-darkH text-center sm:text-left">
            Error 404
          </h1>
          <p className="font-semibold dark:text-darkP">
            Oops! Seems like the page is not found..
          </p>
        </div>
        <img
          className="hidden sm:block h-[120px] w-[120px] rounded-full"
          src={require("../images/cute_dev.png")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Page404;
