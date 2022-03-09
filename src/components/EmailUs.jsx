import { useState } from "react";

export default () => {
  const [email, setEmail]=useState('')
  const [comment, setComment]=useState('')
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }
  const handleComment=(e)=>{
    setComment(e.target.value)
  }
  const submitEmail=()=>{

  }
  return (
    <div className="w-full">
      <div className="p-2 flex mx-auto gap-y-2 flex-wrap justify-center w-[18rem] sm:w-[30rem]">
        <h2 className="text-3xl bg-slate-100 font-bold w-full text-center">
          EMAIL <span className="text-teal-500">US</span>
        </h2>
        <input type="email" onChange={handleEmail} className="bg-slate-100 px-4 py-2 w-full " placeholder="your email address"/>
        <textarea value={comment} onChange={handleComment} className="bg-slate-100 w-full px-4 py-2"></textarea>
        <button onClick={submitEmail} className="bg-teal-500 w-full py-2 px-4 text-slate-100" >Send Email</button>

      </div>
    </div>
  );
};
