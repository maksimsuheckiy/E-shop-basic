export const checkDataStorage = (dataProducts) => {
    const cartStorage = JSON.parse(localStorage.getItem('cart'));
    const favoritesStorage = JSON.parse(localStorage.getItem('favorites'));

    let updatedData = dataProducts;

    if (cartStorage) {
        updatedData = dataProducts.map(product => {
            const cartProduct = cartStorage.find(cartProduct => product.code === cartProduct.code);
            return {...product, inCart: cartProduct ? true : product.inCart}
        })
    }

    if (favoritesStorage) {
        updatedData = updatedData.map(product => {
            const favoriteProduct = favoritesStorage.find(favProduct => product.code === favProduct.code);
            return {...product, isFavorite: favoriteProduct ? true : product.isFavorite}
        })
    }

    return updatedData
}