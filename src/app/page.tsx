
import GetImage from "@/app/components/getImage";
import { Suspense } from "react";
import Loading2 from "./components/loading2";


export default function Home({searchParams}:{searchParams?:{query:string}}) {
  const query = searchParams?.query || "";
  
  return <main>

    <Suspense key={query} fallback={<Loading2/>}>

    <GetImage query={query}/>

    </Suspense>
    
  </main>
}
