import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
 return (
   <>
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-4xl font-bold text-zinc-800">Bem vindos a nossa loja</h2>
      <p className="text-zinc-700 w-3/5 pt-8 leading-relaxed font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo quos dolor explicabo officiis id ducimus repellendus reiciendis porro aperiam, tenetur minus excepturi, saepe, eligendi error facere veritatis repellat quidem animi.</p>
      <Link 
      to={"/products"} 
      className="bg-zinc-700 p-3 mt-5 text-zinc-100 font-semibold rounded-lg hover:bg-zinc-600">
        Veja nossos produtos
      </Link>
    </div>
   </>
 )
}