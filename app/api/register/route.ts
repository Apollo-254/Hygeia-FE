import { NextResponse } from "next/server";

export async function POST(requsest: Request) {
  const body = await requsest.json();

  await fetch("https://235c-41-139-168-163.ngrok-free.app/auth/v1/signin")
    .then((response) => {
      console.log("at error ------->", body);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("at done ------->", body);
      console.log("from fetch ---------------->", data);
    })
    .catch((error) => {
      console.log("at done ------->", body);
      console.error("Error:", error);
    });

  return NextResponse.json(body);
}
