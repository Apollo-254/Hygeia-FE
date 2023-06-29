"use client";
import NavBar from "@/app/components/NavBar";
import { useSession } from "next-auth/react";

const Appointments = [
  {
    id: "1",
    name: "Nelson Njino Chege",
    phone: "2342424",
    password: "vP8%=0~!/ujRfv",
    confirm_psd: "vP8%=0~!/ujRfv",
    gender: "male",
    age: 23,
    doctors_remark: "sdhjksadfhkjsafd",
  },
  {
    id: "2",
    name: "Nelson Njino Chege",
    phone: "2342424",
    password: "vP8%=0~!/ujRfv",
    confirm_psd: "vP8%=0~!/ujRfv",
    gender: "male",
    age: 23,
    doctors_remark: "sdhjksadfhkjsafd",
  },
];

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <NavBar />
      <div className="h-screen pt-20 flex ">
        <div className="flex flex-col ">
          {Appointments.length === 0 ? (
            <p>you have no appointment.</p>
          ) : (
            <div>
              <h1 className="mb-2"> List of Appointments</h1>
              <div className="flex gap-2">
                {Appointments.map((item) => (
                  <div
                    className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                    key={item.id}
                  >
                    <a href={`/appointment/${item.id}`}>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {item.doctors_remark}
                    </p>
                    <a
                      href={`/appointment/${item.id}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
