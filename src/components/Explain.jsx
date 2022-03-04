const Pic = ({ url }) => {
  return (
      <div className="lg:w-1/2">
        <div
          className="h-64 bg-cover lg:rounded-lg lg:h-full"
          style={{backgroundImage:`url(${url})`}}
        ></div>
      </div>
  );
};

const Details = ({ about, title }) => {
  return (
      <div className="py-12 px-6   lg:w-[60vw]">
        <h2 className="text-3xl text-gray-800 font-bold">{title}</h2>
        <p className="mt-4 text-gray-600">{about}</p>
      </div>
  );
};

export default ({ left = true, about, title, image }) => {
  return (
    <div className="lg:py-12 w-full lg:flex lg:justify-center">
      <div className="bg-slate-50 lg:mx-8 w-full lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
        {left ? (
          <>
            <Pic url={image} /> <Details about={about} title={title} />
          </>
        ) : (
          <>
           <Details about={about} title={title} /> <Pic url={image} /> 
          </>
        )}
      </div>
    </div>
  );
};
