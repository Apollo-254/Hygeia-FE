'use client';


import NavBar from './NavBar';


const HospitalList = () => {


return (
<div>
<div className='bg-white'>
<NavBar />
<div className="h-screen pt-10 flex items-center justify-center">
<div className="flex flex-col items-center">
<h1 className='text-3xl mb-4 '>Select A prefered Hospital</h1>
<form >
<div>
<div className="relative mt-2 rounded-md shadow-sm">
<select
    id="currency"
    name="currency"
    className="h-full w-56   rounded-md border-2 bg-transparent py-2 pl-2 px-6 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
>
    <option>Hospital x     : 1000/=</option>
    <option>Hospital x     : 1000/=</option>
    <option>Hospital x     : 1000/=</option>
    <option>Hospital x     : 1000/=</option>
    <option>Hospital x     : 1000/=</option>
</select>

</div>

</div>
</form>
</div>
</div>
</div>
</div>
);
};


export default HospitalList;
