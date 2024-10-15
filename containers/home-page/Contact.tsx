import React from "react";
import MapImage from "@/public/images/Additional/map.png";
import Image from "next/image";

const Contact = () => {
  const contactList = [
    { id: 1, title: "Adres: 59A, 64-200 Nowe Tłoki" },
    { id: 2, title: "Otwarte od Poniedziałku do Piatku." },
    { id: 3, title: "Godziny: 08:00 - 16:00" },
    { id: 4, title: "Telefon: 533 025 109" },
    { id: 5, title: "side2side.garage@gmail.com" },
  ];
  return (
    <div>
      <div className="container">
        <h1 className="text-3xl font-bold mb-4">Kontakt</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            {contactList.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-1 p-2 border bg-zinc-900 rounded-2xl justify-center items-center"
              >
                <p className="text-xl font-bold">{item.title}</p>
              </div>
            ))}
          </div>
          <div>
            <Image
              src={MapImage}
              alt="side2side"
              className="object-cover  w-[90%] shadow-md m-5 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
