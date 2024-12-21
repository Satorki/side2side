"use client";
import TitleSection from "@/components/atoms/TitleSection";
import { DoorOpen, Mail, MapPin, PhoneIcon, Share2 } from "lucide-react";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const contactList = [
    {
      id: 1,
      icon: <MapPin />,
      title: "Adres:",
      descriptionUp: "59A,",
      descriptionDown: "64-200 Nowe Tłoki",
    },
    {
      id: 2,
      icon: <DoorOpen />,
      title: "Godziny Otwarcia",
      descriptionUp: "",
      descriptionDown: "od poniedziałku do piątku: 08:00 - 16:00",
    },
    {
      id: 3,
      icon: <PhoneIcon />,
      title: "Telefon:",
      descriptionUp: (
        <Link
          href="tel:+48 533 025 109"
          className="active:font-bold hover:text-[#d52727] underline underline-offset-2"
        >
          +48 533 025 109
        </Link>
      ),
    },
    {
      id: 4,
      icon: <Mail />,
      title: "Email:",
      descriptionUp: (
        <Link
          href={"mailto:side2side.garage@gmail.com"}
          className="active:font-bold hover:text-[#d52727] underline underline-offset-2"
        >
          side2side.garage@gmail.com
        </Link>
      ),
    },
    {
      id: 4,
      icon: <Share2 />,
      title: "Social:",
      descriptionUp: (
        <div className="flex gap-4">
          <Link
            href={"https://www.facebook.com/S2SMotorsport"}
            aria-label="Przejdź na Facebook side2side"
          >
            <FaFacebook className="text-3xl active:font-bold hover:text-[#d52727] cursor-pointer" />
          </Link>
          <Link
            href={"https://www.instagram.com/side2side_motorsport/"}
            aria-label="Przejdź na Instagram side2side"
          >
            <FaInstagram className="text-3xl active:font-bold hover:text-[#d52727] cursor-pointer" />
          </Link>
        </div>
      ),
    },
  ];
  return (
    <div id="contact">
      <div className="max-w-[1200px] mx-auto text-white font-bai">
        <div className="flex flex-col px-8 md:px-0">
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1">
              <div className="md:py-4">
                <TitleSection titleBegining="Czekamy na Twoją wizytę" />
              </div>
              {contactList.map((item) => (
                <div className="flex gap-4 pt-5" key={item.id}>
                  <div>{item.icon}</div>
                  <div className="flex flex-col">
                    <p className="text-xl font-bold">{item.title}</p>
                    <div className="pt-1">{item.descriptionUp}</div>
                    <div>{item.descriptionDown}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="map">
              <iframe
                title="Side2Side Motorsport Wolsztyn Nowe Tłoki"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18997.98319147391!2d16.105319432614245!3d52.142336158585195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705d16678e0ae9b%3A0x944a1727876068bd!2sSide2Side%20Motorsport!5e0!3m2!1spl!2spl!4v1730192139471!5m2!1spl!2spl"
                style={{ border: 0 }}
                className="w-full h-full rounded-2xl"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        #contact {
          padding: 10rem 0;
          background-color: var(--color-background1);
        }

        .map {
          width: 100%;
          height: auto;
          flex: 1;
        }
        @media (max-width: 768px) {
          .map {
            height: 50vh;
          }
          #contact {
            padding: 2rem 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
