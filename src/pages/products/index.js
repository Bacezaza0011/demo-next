import Head from "next/head";
import Image from "next/image";
import Mycomponent from "@/components/Mycomponent";
import product1 from "../../../public/assets/images/1.gif"
import product2 from "../../../public/assets/images/2.gif"
import product3 from "../../../public/assets/images/3.gif"
import product4 from "../../../public/assets/images/4.gif"
import Link from "next/link";

export default function Product({ product }) {
    console.log(`- product -`, product)
    return (
        <>
            <Head>
                <title>Product Page</title>
            </Head>
            <div style={{ background: "linear-gradient(90deg, rgb(147 157 243) 0%, rgb(140 233 208) 100%)" }}
                className="min-h-screen justify-items-center p-5"
            >
                <p className="text-black text-4xl font-bold text-center p-5 font-mono">Products </p>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {product.map((item) => (
                        <Link
                            key={item.id}
                            href={`/products/${item.id}`}
                            className="mix-blend-multiply "
                        >
                            <div>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    className="w-[200px] h-[220px] justify-self-center hover:scale-105"
                                />
                                <p className="text-black text-2xl font-bold font-mono">{item.title}</p>
                                <p className="text-black text-2xl font-mono">$ {item.price}</p>
                            </div>
                        </Link>
                    ))}


                    {/*<div>
                <Image
                src={product1}
                alt="product 1"
                className= "w-[480px] h-[480px]"
                />
                <p className="text-black text-2xl font-bold font-mono">Product 1</p>
                <p className="text-black text-2xl font-mono">100.-</p>
            </div>
            <div>
                <Image
                src={product2}
                alt="product 2"
                className= "w-[480px] h-[480px]"
                />
                <p className="text-black text-2xl font-bold font-mono">Product 1</p>
                <p className="text-black text-2xl font-mono">100.-</p>
            </div>
            <div>
                <Image
                src={product3}
                alt="product 3"
                className= "w-[480px] h-[480px]"
                />
                <p className="text-black text-2xl font-bold font-mono">Product 1</p>
                <p className="text-black text-2xl font-mono">100.-</p>
            </div>
            <div>
                <Image
                src={product4}
                alt="product 4"
                className= "w-[480px] h-[480px]"
                />
                <p className="text-black text-2xl font-bold font-mono">Product 1</p>
                <p className="text-black text-2xl font-mono">100.-</p>
            </div>*/}
                </div>

            </div>
        </>)
}
export async function getServerSideProps() {
    const resp = await fetch(`https://fakestoreapi.com/products`);
    const product = await resp.json();

    return {
        props: { product }
    }

}