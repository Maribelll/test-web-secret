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
            <img
              className="planet-image"
              src={`https://imgproxy.by.dev.family/unxn1YtzK0U17tHAeHEu7a5LB5AQ6BMc-WMjYM2Wd9I/w:266/h:266/czM6Ly9nZXRsZW5zLzExNi8xM2hxLndlYnA.jpg`}
              alt=""
            />
          </div>
          <div className="description-product">
            <p className="title-product">{}</p>
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

export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://getlens-master.stage.dev.family/api/pages/obektivy?page=1"
  );
  const todos = await res.json();

  return {
    props: {
      todos,
    },
  };
};

class ApiService {
  _apiBase =
    "https://getlens-master.stage.dev.family/api/pages/obektivy?page=1";
  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch" ${url}` + `, received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResourse(`/title/`);
    return res.results;
  }

  getTitle(id) {
    return this.getResourse(`/title/${id}`);
  }
}
const swapi = new ApiService();

swapi.getTitle(1391).then((p) => {
  console.log(p.title);
});
