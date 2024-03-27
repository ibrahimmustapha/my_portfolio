import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";

const contactData = [
  {
    id: 1,
    title: "Location",
    details: "Accra, Ghana",
    icon: faMapLocation,
  },
  {
    id: 2,
    title: "Mail",
    details: "musib581@gmail.com",
    icon: faEnvelopeOpenText,
  },
];
const Contact = () => {
  return (
    <div className="">
      <div className="text-xl font-black mb-4">CONTACT</div>
      <div className="mb-12">Hey hit me up - Let's get things done! 👇</div>
      <div className="md:flex md:justify-start md:gap-20">
        {contactData.map((contact) => (
          <div className="flex gap-7 items-center my-7">
            <FontAwesomeIcon
              icon={contact.icon}
              size={"xl"}
              color="#ffea00"
              className="shadow-lg p-4 rounded-full bg-[#343a40]"
            />
            <div>
              <div className="font-black">{contact.title}</div>
              <div>{contact.details}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
