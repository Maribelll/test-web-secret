import { render } from "react-dom";
import profilePic from "../public/image40.png";
import Image from "next/image";
import profileSvg from "../public/heart.png";

export default function Product() {
  return (
    <>
      <div className="main-products">
        <div className="product">
          <div className="image-product">
            <Image src={profilePic} alt="img" />
          </div>
          <div className="description-product">
            <p className="title-product">Olympus OM-D E-M5</p>
            <span className="price-product">28 000 &#8381;</span>
            <input
              className="button-product"
              type="button"
              value="В корзину"
            ></input>
            <div className="new-product">Новый</div>
          </div>
        </div>
        <div className="product">
          <div className="image-product">
            <Image src={profilePic} alt="img" />
          </div>
          <div className="description-product">
            <p className="title-product">Olympus OM-D E-M5</p>
            <span className="price-product">28 000 &#8381;</span>
            <input
              className="button-product"
              type="button"
              value="В корзину"
            ></input>
          </div>
        </div>
        <div className="product">
          <div className="image-product">
            <Image src={profilePic} alt="img" />
          </div>
          <div className="description-product">
            <p className="title-product">Olympus OM-D E-M5</p>
            <span className="price-product">28 000 &#8381;</span>
            <input
              className="button-product"
              type="button"
              value="В корзину"
            ></input>
          </div>
        </div>
        <div className="product">
          <div className="image-product">
            <Image src={profilePic} alt="img" />
          </div>
          <div className="description-product">
            <p className="title-product">Olympus OM-D E-M5</p>
            <span className="price-product">28 000 &#8381;</span>
            <input
              className="button-product"
              type="button"
              value="В корзину"
            ></input>
          </div>
        </div>
        <div className="product">
          <div className="label-new-product">НОВИНКА</div>
          <div className="image-product">
            <Image src={profilePic} alt="img" />
          </div>
          <div className="description-product">
            <p className="title-product">Olympus OM-D E-M5</p>
            <span className="price-product">28 000 &#8381;</span>
            <input
              className="button-product"
              type="button"
              value="В корзину"
            ></input>
          </div>
        </div>
        <div className="product">
          <div className="label-new-product">НОВИНКА</div>
          <div className="image-product">
            <Image src={profilePic} alt="img" />
          </div>
          <div className="description-product">
            <p className="title-product">Olympus OM-D E-M5</p>
            <span className="price-product">28 000 &#8381;</span>
            <input
              className="button-product"
              type="button"
              value="В корзину"
            ></input>
            <div className="new-product">Новый</div>
          </div>
        </div>
        <div className="product">
          <div className="image-product">
            <Image src={profilePic} alt="img" />
          </div>
          <div className="description-product">
            <p className="title-product">Olympus OM-D E-M5</p>
            <span className="price-product">28 000 &#8381;</span>
            <input
              className="button-product"
              type="button"
              value="В корзину"
            ></input>

            <div className="heart-product">
              <Image src={profileSvg} alt="img" />
            </div>
          </div>
        </div>
        <div className="product">
          <div className="image-product">
            <Image src={profilePic} alt="img" />
          </div>
          <div className="description-product">
            <p className="title-product">Olympus OM-D E-M5</p>
            <span className="price-product">28 000 &#8381;</span>
            <input
              className="button-product"
              type="button"
              value="В корзину"
            ></input>
            <div className="new-product">Новый</div>
            <div className="heart-product">
              <Image src={profileSvg} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
