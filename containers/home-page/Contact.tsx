import TitleSection from "@/components/atoms/TitleSection";

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
  ];
  return (
    <div id="contact" className="bg-black">
      <div className="max-w-[1200px] mx-auto py-8 text-white font-bai">
        <div className="flex flex-col gap-4 px-8">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <TitleSection titleBegining="Odwiedź nas w:" />
              {contactList.map((item) => (
                <div key={item.id} className="flex flex-col">
                  <p className="text-xl font-bold pt-4">{item.title}</p>
                  <p>{item.descriptionUp}</p>
                  <p>{item.descriptionDown}</p>
                </div>
              ))}
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18997.98319147391!2d16.105319432614245!3d52.142336158585195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4705d16678e0ae9b%3A0x944a1727876068bd!2sSide2Side%20Motorsport!5e0!3m2!1spl!2spl!4v1730192139471!5m2!1spl!2spl"
              style={{ border: 0 }}
              className="rounded-xl w-full h-[400px]  md:h-[400px] shadow-lg flex-1"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
