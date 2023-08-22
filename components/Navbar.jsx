import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Todo
      </Link>
      <Link href={"/addTodo"} className="bg-white p-2 rounded-md">
        Add Todo
      </Link>
    </nav>
  );
};

export default Navbar;
