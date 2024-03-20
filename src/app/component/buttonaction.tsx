import { Trash2 } from "lucide-react";
import {Pencil} from 'lucide-react'
import Link from "next/link";

const ButtonAction = () => {
  return (
    <>
      <Link className="btn" href="/edit/id"><Pencil/> Edit</Link>

      <button className="btn btn-error">
        {" "}
        <Trash2 /> Delete
      </button>
    </>
  );
};

export default ButtonAction;
