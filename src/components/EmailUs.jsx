export default () => {
  return (
    <>
      <div className="p-2 flex flex-wrap justify-center w-[20rem]">
        <h2 className="text-3xl font-bold ">
          EMAIL <span className="text-teal-500">US</span>
        </h2>
        <input type="email" className="bg-slate-100 px-4 py-2" />
        <button>Send Email</button>
      </div>
    </>
  );
};
