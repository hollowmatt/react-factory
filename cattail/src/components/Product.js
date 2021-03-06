function Product ({product: {title, price, description, category, image}}) {
    return (
        <div className="flex bg-gray-50 w-full mb-5 shadow-xl rounded-lg group overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div className="w-5/12 p-2 bg-white rounded-tl-lg rounded-bl-lg">
                <div className="bg-contain bg-no-repeat bg-center w-full h-full transition-transform duration-300 group-hover:transform group-hover:scale-125" style={{backgroundImage: `url(${image})`}}></div>
            </div>
            <div className="w-7/12 p-5">
            <h1 className="md:text-2xl">{title.substr(0, 50)}</h1>
            <h3 className="text-gray-400">{category}</h3>
            <p className="text-red-400 mt-4 text-xl md:text-4xl">${price}</p>
            <div className="mt-4">{description.substr(0, 100)}</div>
            </div>
        </div>
    );
}

export default Product;