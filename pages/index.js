import PageTitle from "../components/Headline/Headline";
import ProductCard from "../components/ProductCard/ProductCard";
import Shelf from "../components/Shelf/Shelf";
import Head from "next/head";

export default function Home(props) {
  const products = props.products;
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Assessment 5</title>
      </Head>
      <PageTitle title="Coffee Break Cafe" tagline="Featured Beans on Sale"/> 
      <hr />
      <main>
        <Shelf>
          {
            products.map(product => <ProductCard key={product.uid} product={product} />)
          }
        </Shelf>
        
      </main>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://storefront-79b11-default-rtdb.firebaseio.com/coffee.json');
  const productData = await res.json();

  const products = Object.values(productData);

  return {
    props:{
      products,
      fallback:false
    }
  }
}
