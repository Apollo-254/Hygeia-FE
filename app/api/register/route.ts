import { NextResponse } from "next/server";

export async function POST(requsest: Request) {
  const body = await requsest.json();

  const user = {
    name: body.fullName,
    phone: body.Mobile,
    password: body.password,
    confirm_psd: body.password,
    gender: body.Gender,
    age: body.DOB,
  };
  console.log("user -------------->", user);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  await fetch(
    "https://ef02-41-139-168-163.ngrok-free.app/auth/v1/signup",
    requestOptions
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      const returnedUser = data.response[0].details[0].details;
      console.log("response here ------------------->", returnedUser);
      return NextResponse.json(returnedUser);
    })
    .catch((error) => {
      console.log("error here ------------------->", error);
      console.error("Error:", error);
    });
}
