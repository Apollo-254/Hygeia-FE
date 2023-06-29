import NavBar from './NavBar';
import Image from 'next/image';




const Appointments = () => {


return (
<div className='bg-white'>
<NavBar />
<div className="h-screen pt-10 flex items-center justify-center">
<div className="flex flex-col items-center">
<h1 className='text-3xl mb-4 '>Good Morning DOC x</h1>
<div className='md:w-full w-3/4 h-30 object-cover '>
<Image src='/images/hero.jpg' alt='hero' width={600} height={150} className='rounded-2xl'/>
</div>
<div className='flex my-8 gap-x-4 font-semibold'>
<div className="p-8 md:w-52 md:h-52 w-42 h-42 bg-orange-200 text-center text-slate-600 rounded-lg" >Completed Appointments <span className='text-green-600 animate-pulse text-xl'>#30</span></div>
<div className="animate-bounce p-8 w-52 h-52 text-center bg-teal-200 text-slate-600 rounded-lg" >Pending Appointments <span className='text-red-800 animate-pulse text-xl'>#2</span></div>
</div>
</div>
</div>
</div>
);
};


export default Appointments;


