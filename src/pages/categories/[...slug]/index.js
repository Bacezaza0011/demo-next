import { useRouter } from "next/router";

export default function Catagories(){
    const router = useRouter();
    const {slug} = router.query;

    return (
    <div>
        <h1>Catagorie Page</h1>
        <p>Slug string: {slug}</p>
        <p>Slug: {JSON.stringify(slug)}</p>
    </div>)
    
}