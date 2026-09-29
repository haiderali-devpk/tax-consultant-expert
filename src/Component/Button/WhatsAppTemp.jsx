import "./WhatsAppTemp.scss";
const WhatsAppTemp = () => {
  const phoneNumber = "923039486040";
  const message =
    "Hello, I need assistance with your tax services. Please guide me.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a 
      href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-success d-inline-flex align-items-center" id="w-btn"> Book Consultation </a>
  );
};

export default WhatsAppTemp;