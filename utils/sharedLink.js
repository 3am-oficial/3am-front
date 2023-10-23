import { toast } from "react-toastify";

export const handleShareClick = (element, type) => {
  const shareURL = `http://localhost:3001/${type}/${element.id}/ y tu codigo VIP es ${element.code}`;
  const message = `Gracias por interesarte en nuestra música. Este es tu código de ingreso VIP: ${element.code}. Úsalo en la siguiente URL: ${shareURL}`;
  navigator.clipboard.writeText(message);
  toast.success("Enlace copiado al portapapeles");
};
