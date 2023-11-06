import { toast } from "react-toastify";

export const handleShareClick = (element, type) => {
  console.log(element, "asjndljsa");
  const shareURL = `Ingresa a esta URl: https://am-oficial.web.app/${type}/${element.id} e ingrese el siguiente codigo promocional ${element.code}`;
  const message = `${shareURL}`;
  navigator.clipboard.writeText(message);
  toast.success("Enlace copiado al portapapeles");
};
