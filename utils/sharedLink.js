import { toast } from "react-toastify";

export const handleShareClick = (element, type) => {
  const shareURL = `https://am-oficial.web.app/${type}/${element.id}`;
  const message = `${shareURL}`;
  navigator.clipboard.writeText(message);
  toast.success("Enlace copiado al portapapeles");
};
