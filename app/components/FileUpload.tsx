'use client';


import NavBar from './NavBar';


const FileUpload = () => {


return (
<div>
<div className='bg-white'>
<NavBar />
<div className="h-screen pt-10 flex items-center justify-center">
<div className="flex flex-col items-center">
<h1 className='text-3xl mb-4 '>Submit Diagnosis Report</h1>
<form >
<div>
<div className="relative mt-2 rounded-md shadow-sm">
<input
type="file"
name="report"
id="report"
className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
placeholder="Submit Diagnosis Report"
/>
</div>

</div>
</form>
</div>
</div>
</div>
</div>
);
};


export default FileUpload;
