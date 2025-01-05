const productResource = (data) => {
  return {
    id: data.id,
    name: data.name,
    price: data.price,
  };
};

export default productResource;
