async function getProduct(uid) {
    const res = await fetch(
      `https://storefront-79b11-default-rtdb.firebaseio.com/coffee/${uid}.json`
    );
    const data = await res.json();
    return data;
  }
  
  export { getProduct };