import Button from '../Button/Button';

const Product = ({ name, price, img, url }) => {
  const onClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="md:w-[30%] w-ful rounded overflow-hidden shadow-lg">
      <img className="w-full" src={img} alt={name} />
      <div className="px-4 py-4 flex justify-between">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{price}</p>
      </div>
      <div className="py-4">
        <Button label="Add to Cart" onClick={() => onClick(url)} />
      </div>
    </div>
  );
};

export default Product;