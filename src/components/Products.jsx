import Product from "../components/Product";

const products = [
    {
        id: 1,
        name: "fruits",
        urlImage: 
        "https://plus.unsplash.com/premium_photo-1671379086168-a5d018d583cf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJ1aXR8ZW58MHx8MHx8fDA%3D",
        price: 2.00
    },
    {
        id: 2,
        name: "fried Rice",
        urlImage: 
        "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJpZWQlMjByaWNlfGVufDB8fDB8fHww",
        price: 5.00
    },
    {
        id: 3,
        name: "Biryani Rice",
        urlImage: 
        "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D",
        price: 8.00
    },
    {
        id: 4,
        name: "Pizza",
        urlImage: 
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGl6emF8ZW58MHx8MHx8fDA%3D",
        price: 12.00
    },
    {
        id: 5,
        name: "Pasta",
        urlImage: 
        "https://images.unsplash.com/photo-1627042633145-b780d842ba45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhc3RhfGVufDB8fDB8fHww",
        price: 6.00
    },
    {
        id: 6,
        name: "Burger",
        urlImage: 
        "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVyZ2VyfGVufDB8fDB8fHww",
        price: 7.00
    }
]
const Products = () => {
    return (
        <div className="grid">
        {products.map(product => (
            
                <Product key={product.id} product = {product}/>
           
        ))}
         </div>
    )
}
export default Products;