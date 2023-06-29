import { FaceSmileIcon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";

export default function Example() {
  return (
    <div className=" px-8 mt-8  mx-8  lg:py-0">
      <div className=" rounded-lg  ">
        <div className="p-6 space-y-8  ">
          <div className="mx-auto flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
            <FaceSmileIcon
              className="h-600 w-600 text-green-600"
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://media.graphcms.com/kXa8JqIBRnCMtZnHkb1u"
            height={200}
            width={400}
          />
        </div>

        <div className="flex justify-center mt -3">
          <div className="border bg-white rounded-lg border-gray-500 p-4 mt-5  w-64 h-64">
            <p className="text-sm text-center font-semibold leading-6 text-gray-900">
              Completed Appointments
            </p>
            <p className="text-sm text-center font-semibold leading-6 text-gray-900">
              #300
            </p>
          </div>
          <div className="border bg-white rounded-lg border-gray-500 p-4 ml-8 mt-5  w-64 h-64">
            <p className="text-sm text-center font-semibold leading-6 text-gray-900">
              Pending Appointments
            </p>
            
            <p className="text-sm text-center font-semibold leading-6 text-gray-900">
              #300
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
