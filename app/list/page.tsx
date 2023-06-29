"use client";

import NavBar from "../components/NavBar";
import ListPage from "./list";

export default function AppListPage() {
  return (
    <>
      <NavBar />
      <section className="p-20  bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div className="w-2/3 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white-800 dark:border-gray-700">
            <div className="p-6 space-y-8 md:space-y-6 sm:p-8">
              <ListPage />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
