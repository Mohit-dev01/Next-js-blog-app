import Image from "next/image";
import PostCard from "./component/postcard";

export default function Home() {
  return (
   <>
  <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-3 gap-2 ">
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
    <PostCard/>
  </div>
   </>
  );
}
