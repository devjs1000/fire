export default ({image, title, price, about}) => {
  return <div className="container my-5 mx-auto p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    <img
      className="rounded-xl"
      src={image}
      alt=""
    />
    <div className="flex justify-between items-center">
      <div>
        <h1 className="mt-5 text-2xl font-semibold">{title}</h1>
        <h2 className="mt-5 text-lg font-light">{about}</h2>
        <p className="mt-2">{price}</p>
      </div>
      <div>
        <button className="text-white text-md w-[8rem] font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">
         call now
        </button>
      </div>
    </div>
  </div>;
};
