import EditTodoForm from "@/components/EditTodoForm";
import React from "react";

const getTodoById = async (id) => {
  try {
    const res = await fetch(`http:localhost:3000/api/todos/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Fail to fetch Todo");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const EditTodo = async ({ params }) => {
  const { id } = params;
  const { todo } = await getTodoById(id);
  const { title, description } = todo;
  return <EditTodoForm id={id} title={title} description={description} />;
};

export default EditTodo;
