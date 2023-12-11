import { Link } from "react-router-dom";

export default function Header() {
 return (
   <header className="flex justify-between items-center px-12 py-8 bg-zinc-600 h-20">
    <h1 className="text-3xl font-bold text-zinc-100 cursor-pointer">LOJA VIRTUAL</h1>
    <nav>
        <ul className="flex gap-16 text-zinc-50 font-semibold">
            <li className="hover:text-sky-400 hover:scale-110 transition-all"><Link to={"/"}>Inicio</Link></li>
            <li className="hover:text-sky-400 hover:scale-110 transition-all"><Link to={"/products"}>Produtos</Link></li>
            <li className="hover:text-sky-400 hover:scale-110 transition-all"><Link to={"/cart"}>Carrinho</Link></li>
        </ul>
    </nav>
   </header>
 )
}