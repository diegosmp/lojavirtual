import product from "../database.json"

export default function Products() {
 return (
    <>
   <div className="flex flex-col items-center mt-6">
    <h1 className="text-zinc-800 text-4xl font-bold">Produtos</h1>
    <div className="flex items-center w-[60rem] p-10 justify-center">
        {product.products.map(product => (
            <div className="flex flex-col items-center justify-center px-8" key={product.id}>
                <div className="flex flex-col items-center bg-zinc-300 w-64 h-80 py-4 justify-center px-2 rounded-md">
                <img src={product.image} alt={product.name} className="w-32 mb-4" />
                <h4 className="text-xl font-bold text-zinc-800 mb-4">{product.name}</h4>
                <p className="text-lg font-medium text-zinc-600 mb-2">R$ {product.price}</p>
                <button className="bg-sky-500 h-8 w-24 rounded-lg font-semibold text-zinc-50 hover:bg-sky-300">
                    Comprar
                </button>
                </div>
            </div>
        ))}
    </div>
   </div> 
    </>
 )
}