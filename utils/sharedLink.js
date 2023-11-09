import { toast } from "react-toastify";

export const handleShareClick = (element, type) => {
  const shareURL = `Ingresa a esta URl: https://am-oficial.web.app/${type}/${element.id} e ingrese el siguiente codigo ${element.code}`;
  const message = `${shareURL}`;
  navigator.clipboard.writeText(message);
  toast.success("Enlace copiado al portapapeles");
};
