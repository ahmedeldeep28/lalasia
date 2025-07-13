import Image from "next/image";
import Row from "./../layout/Grid";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../store/slice/cartSlice";
import { Trash } from "./../Icons";
import { toast } from "react-toastify";
import Link from "next/link";

function CartCard({ itemData }) {
  const { id, productName, quantity, color, image, price, productId } =
    itemData;

  const dispatch = useDispatch();

  const removeItemTocart = () => {
    dispatch(deleteCart(id))
      .unwrap()
      .then((res) => {
        toast.success("The product has been removed from the cart");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <Row className="py-6 border-t gap-4">
      <div className="col-span-12 sm:col-span-4 lg:col-span-3">
        <Image
          width={350}
          height={350}
          layout="responsive"
          src={`/products/${image}`}
          alt="product card"
        />
      </div>
      <div className="col-span-12 sm:col-span-8 lg:col-span-9 flex flex-col justify-between">
        <div className="flex flex-wrap justify-between items-center">
          <Link href={`/product/${productId}`}>
            <a className="text-h3 hover:text-primary capitalize">
              {productName}
            </a>
          </Link>
          <Trash
            className="text-red-600 hover:text-red-500 cursor-pointer"
            onClick={removeItemTocart}
          />
        </div>
        <ul className="flex flex-col flex-wrap space-y-2 mt-4">
          <li className="space-x-2 text-h6 capitalize">
            <span>quantity</span>
            <span className="text-p-3 text-base font-normal">{quantity}</span>
          </li>
          <li className="space-x-2 text-h6 capitalize">
            <span>color</span>
            <span className="text-p-3 text-base font-normal">{color}</span>
          </li>
          <li className="space-x-2 text-h6 capitalize">
            <span>price</span>
            <span className="text-p-3 text-base font-normal ">{price}</span>
          </li>
          <li className="space-x-2 text-h6 capitalize">
            <span>total price</span>
            <span className="text-p-3 text-base font-normal ">
              {(quantity * price).toFixed(2)}
            </span>
          </li>
        </ul>
      </div>
    </Row>
  );
}

export default CartCard;
