export default ({ name, mobile, about, image }) => {
  return (
    <div className="shadow-lg m-4   cursor-pointer h-[20rem] w-[20rem] rounded-xl">
      <img src={image} className="object-cover rounded-lg w-full h-[50%]" />
      <div className="px-4 py-2">
        <h1>{name}</h1>
        <p>{about}</p>
        {mobile}
      </div>
    </div>
  );
};
