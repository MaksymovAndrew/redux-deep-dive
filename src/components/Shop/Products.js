import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "haha, soup",
    description: "haha, eating soup with fork",
  },
  {
    id: "p2",
    price: 5,
    title: "car",
    description: "toy car",
  },
  {
    id: "p3",
    price: 100,
    title: "Lego",
    description: "lego car",
  },
  {
    id: "p4",
    price: 16,
    title: "grib",
    description: "mushrooms",
  },
  {
    id: "p5",
    price: 90,
    title: "wateer",
    description: "wateer",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
