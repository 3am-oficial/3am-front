import { Sections } from "@/components";
import { toast } from "react-toastify";

const Events = () => {
  const viewEvent = () => {
    toast.warn("No disponible");
  };
  return (
    <div className="bg-black pt-[90px]">
      <Sections
        img={"/assets/images/photo1.jpg"}
        event
        label="Ver evento"
        onClick={viewEvent}
        text="Lorem ipsum dolor sit amet consectetur adipiscing elit mi, massa aenean
        nascetur feugiat facilisi blandit ante quis mauris, sollicitudin
        faucibus velit nam cras pharetra eleifend. Vivamus et a non habitasse
        donec magnis primis, ut praesent tincidunt netus interdum accumsan nam,
        ridiculus sapien integer iaculis eros sociis. Elementum risus
        scelerisque dui sociis maecenas ad magna ridiculus, etiam non neque
        velit laoreet placerat curabitur, cursus eu nam dictum a aenean cubilia."
      />

      <Sections
        imgRight
        event
        onClick={viewEvent}
        label="Ver evento"
        img={"/assets/images/photo1.jpg"}
        text="Lorem ipsum dolor sit amet consectetur adipiscing elit mi, massa aenean
        nascetur feugiat facilisi blandit ante quis mauris, sollicitudin
        faucibus velit nam cras pharetra eleifend. Vivamus et a non habitasse
        donec magnis primis, ut praesent tincidunt netus interdum accumsan nam,
        ridiculus sapien integer iaculis eros sociis. Elementum risus
        scelerisque dui sociis maecenas ad magna ridiculus, etiam non neque
        velit laoreet placerat curabitur, cursus eu nam dictum a aenean cubilia."
      />
    </div>
  );
};

export default Events;
