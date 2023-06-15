import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddTask = () => {
  const { register, handleSubmit, reset } = useForm();

  const handleAddTask = (data) => {
    const taskData = {
      name: data?.name,
      title: data?.title,
      status: data?.status,
      description: data?.description,
    };
    console.log(taskData);
    fetch("https://task-managment-server-peach.vercel.app/add-task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire({
            icon: "success",
            title: "Task Add successful",
            timer: 2000,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.message,
            timer: 2000,
            showConfirmButton: false,
          });
        }
      });
  };
  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold text-center my-6">Add Your new Task</h1>
      <form
        onSubmit={handleSubmit(handleAddTask)}
        className="bg-base-300 rounded-2xl md:w-7/12 mx-auto shadow-xl  shadow-black/60 p-6"
      >
        <div className="form-control w-full ">
          <label className="label">
            <span className="text-xl font-semibold italic">Your Name</span>
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="text-xl font-semibold italic">Task Title</span>
          </label>
          <input
            {...register("title", { required: true })}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full mb-4 ">
          <label className="label">
            <span className="text-xl font-semibold italic">Status</span>
          </label>
          <select
            className="input input-bordered w-full"
            {...register("status", { required: true })}
          >
            <option value="pending">Pending</option>
            <option value="working">Working</option>
          </select>
        </div>
        <div>
          <textarea
            {...register("description", { required: true })}
            className="input input-bordered w-full h-36 resize-none p-6"
            placeholder="Description"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-block mt-4 ">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
