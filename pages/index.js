import Aside from "../components/Aside";
import Product from "../components/Product";

export default function Index() {
  return (
    <>
      <main className="main-page">
        <Aside />
        <Product />
      </main>
    </>
  );
}
