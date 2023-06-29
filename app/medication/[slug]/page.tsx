import NavBar from "@/app/components/NavBar";

async function getData() {
  return {
    id: "1",
    doctor_name: "Georgine",
    appointment_date: "9/10/2022",
    lab: true,
    medication: false,
    doctors_diognosis:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  };
}
export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData();
  console.log("data ------------------>", data);
  return (
    <>
      <NavBar />
    </>
  );
}
