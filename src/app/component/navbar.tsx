import { Hexagon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto w-full mb-5">
        <div className="navbar bg-neutral">
          <div className="flex-1">
           <Link href='/'><Hexagon /></Link>
          </div>
          <div className="flex-none">
            
             <Link className="btn btn-ghost" href='/create'>Create Post</Link>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
