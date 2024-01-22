import { useForm } from "react-hook-form";
import { useState } from "react";

function AvisEdit() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);  
  return (
    <>
      <div className="container flex flex-col h-screen justify-center w-screen m-auto">
        <h1 className="text-3xl px-56 flex flex-col mb-4">Merci de nous transmettre votre avis</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="text-xl px-56 flex flex-col gap-y-4">
          <div className="form-group flex flex-col ">
            <label htmlFor="avis" className="">Avis</label>
            <textarea {...register("avis",{required:true})} name="avis"  className="text-gray-700 md:rounded p-3" id="avis"  rows="5"></textarea>
            {errors.avis && <span className="text-red-500">Ce champ est requis</span>}
          </div>
          <div className="form-group flex flex-col ">
            <label htmlFor="email" className="">Email</label>
            <input {...register("email",{required:true})} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"/>
            {errors.email && <span className="text-red-500">Ce champ est requis</span>} 
          </div>
            <div className="form-group flex flex-col "> 
              <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Envoyer</button>
            </div>
          </form>
       </div>
    </>
  )
}

export default AvisEdit
