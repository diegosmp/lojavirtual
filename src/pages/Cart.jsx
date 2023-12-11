import product from "../database.json"


export default function Cart() {
 return (
   <section className="mt-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-zinc-800">Carrinho</h1>
      <div className="mt-8 flex justify-between w-[90%] px-5 pb-3 border-b border-zinc-500">
        <h2 className="font-semibold px-8">Nome</h2>
        <p className="font-semibold">Valor</p>
      </div>
      {product.products.map(product => (
        <div key={product.id} className="mt-8 flex justify-between w-[90%] px-3 pb-3 border-b border-zinc-400">
        <h2 className="font-semibold">{product.name}</h2>
        <p>R$ {product.price}</p>
      </div>
      ))}
      
   </section>
 )
}