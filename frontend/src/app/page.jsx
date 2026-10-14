import styles from "./page.module.css";

const products = [
  {
    name: "Air Max 95",
    brand: "Nike",
    colorway: "Neon",
    price: "R$ 1.299",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Gel-NYC",
    brand: "ASICS",
    colorway: "Cream / Oyster",
    price: "R$ 1.099",
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "9060",
    brand: "New Balance",
    colorway: "Sea Salt",
    price: "R$ 1.199",
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className={styles.logo} href="#">FRED <span>SNEAKERS</span></a>
        <nav><a href="#produtos">Produtos</a></nav>
      </header>

      <section className={styles.intro} id="produtos">
        <p className={styles.eyebrow}>FRED SNEAKERS</p>
        <h1>Nosso catálogo</h1>
        <p className={styles.description}>Conheça alguns modelos que fazem parte da nossa seleção.</p>
      </section>

      <section className={styles.products} aria-label="Produtos">
        {products.map((product) => (
          <article className={styles.card} key={product.name}>
            <div className={styles.image}>
              <img src={product.image} alt={`${product.brand} ${product.name}`} />
            </div>
            <div className={styles.details}>
              <p className={styles.brand}>{product.brand}</p>
              <h2>{product.name}</h2>
              <p className={styles.colorway}>{product.colorway}</p>
              <p className={styles.price}>{product.price}</p>
            </div>
          </article>
        ))}
      </section>

      <footer className={styles.footer}>FRED SNEAKERS · CATÁLOGO</footer>
    </main>
  );
}