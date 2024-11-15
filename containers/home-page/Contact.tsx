import TitleSection from "@/components/atoms/TitleSection";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const contactList = [
    {
      id: 1,
      title: "Adres:",
      descriptionUp: "59A,",
      descriptionDown: "64-200 Nowe Tłoki",
    },
    {
      id: 2,
      title: "Otwarte od Poniedziałku do Piątku",
      descriptionUp: "",
      descriptionDown: "W godzinach: 08:00 - 16:00",
    },
    { id: 3, title: "Telefon:", descriptionUp: "533 025 109" },
    { id: 4, title: "Email:", descriptionUp: "side2side.garage@gmail.com" },
    {
      id: 4,
      title: "Social:",
      descriptionUp: (
        <div className="flex gap-4">
          <FaFacebook className="text-3xl hover:text-black" />
          <FaInstagram className="text-3xl hover:text-black" />
        </div>
      ),
    },
  ];
  return (
    <div id="contact">
      <div className="max-w-[1200px] mx-auto text-white font-bai">
        <div className="flex flex-col gap-4 px-8">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <div className="py-8">
                <TitleSection titleBegining="Odwiedź nas" />
              </div>
              {contactList.map((item) => (
                <div key={item.id} className="flex flex-col pt-5">
                  <p className="text-xl font-bold">{item.title}</p>
                  <div className="pt-1">{item.descriptionUp}</div>
                  <div>{item.descriptionDown}</div>
                </div>
              ))}
            </div>
            <div className="map">
              <iframe
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
