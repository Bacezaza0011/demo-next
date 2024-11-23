import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { IoMdArrowRoundBack } from "react-icons/io";

export default function ProductDetail({product}) {
    console.log(`- product -`, product)
    return (<>
        <Head>
            <title>Product Detail</title>
        </Head>
        <div style={{ background: "linear-gradient(90deg, rgb(147 157 243) 0%, rgb(140 233 208) 100%)" }}
            className="min-h-screen justify-items-center p-5"
        >
            <Link href="/products" className="flex justify-self-start mb-10">
                <IoMdArrowRoundBack />
            </Link>
            <div className="w-full md:w-1/2">
                <p className="text-4xl text-center p-5 font-bold">{product.title}</p>
                <Image 
                src={product.image} 
                alt={product.title}
                className="w-[180px] h-[220px] justify-self-center mix-blend-multiply my-5"
                width={180}
                height={220}
                />
            <div className="text-lg">
                <p>
                    <b>Id: </b> {product.id}
                </p>
                <p>
                    <b>Catagory: </b> {product.category}
                </p>
                <p>
                    <b>Description: </b> {product.description}
                </p>
                <p>
                    <b>Price: </b> {product.price}
                </p>
                <p>
                    <b>Rating: </b> {product.rating.rate}
                </p>
                <p>
                    <b>Count: </b> {product.rating.count}
                </p>
            </div>
            </div>

        </div>
    </>)
}

export async function getServerSideProps(context) {
    const resp = await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
    const product = await resp.json();

    return {
        props: { product }
    }

}