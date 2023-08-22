"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  const router = useRouter();

  const removeTodo = async () => {
    const confirmed = confirm("Are you sure you want to remove this item?");
    if (confirmed) {
      const res = await fetch(`/api/todos/?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTodo} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
