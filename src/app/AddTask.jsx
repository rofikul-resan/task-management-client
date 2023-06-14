import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddTask = () => {
  const [targetTime, setTargetTime] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const currentTime = new Date().getTime();
  const timeValidate = (value) => {
    if (value < 0) {
      return "Only positive value can valid";
    }
    return;
  };

  const handleAddTask = (data) => {
    const minute = +data?.minute || 0;
    const hour = +data?.hour * 60 || 0;
    const time = (minute + hour) * 60000;
    if (time) {
      setTargetTime(time + currentTime);
    }
    const taskData = {
      name: data?.name,
      title: data?.title,
      targetTime: targetTime,
      description: data?.description,
    };
    fetch("http://localhost:5000/add-task", {
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
            showConfirmButton: false,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: data.message,
          });
        }
      });
    console.log(taskData);
  };
  return (
    <div className="px-6">
      <h1 className="text-3xl font-bold text-center my-6">Add Your new Task</h1>
      <form
        onSubmit={handleSubmit(handleAddTask)}
        className="bg-base-300 rounded-2xl md:w-7/12 mx-auto shadow-xl space-y-6 shadow-black/60 p-6"
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
        <div className="grid grid-cols-3 justify-center items-center">
          <h1 className="text-xl  font-semibold items-center  ">
            Target Time :{" "}
          </h1>
          <div className="form-control mx-2 ">
            <input
              {...register("hour", { validate: timeValidate })}
              type="number"
              placeholder="hour"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control  ">
            <input
              {...register("minute", { validate: timeValidate })}
              type="number"
              placeholder="minute"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {errors.hour && (
          <p className="text-red-700 font-semibold ml-2">
            {errors.hour.message}
          </p>
        )}
        {errors.minute && (
          <p className="text-red-700 font-semibold ml-2">
            {errors.minute.message}
          </p>
        )}
        <div>
          <textarea
            {...register("description", { required: true })}
            className="input input-bordered w-full h-36 resize-none p-6"
            placeholder="Description"
          ></textarea>
        </div>
        <div>
          <button type="submit" className="btn btn-primary btn-block ">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
