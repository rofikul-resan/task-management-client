import { useForm } from "react-hook-form";

const AddTask = () => {
  const { register, handleSubmit, reset } = useForm();
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Add Your new Task</h1>
      <form>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="text-xl font-semibold italic">Title</span>
          </label>
          <input
            {...register()}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
