import useAllTask from "../hook/useAllTask";
import TaskCard from "./TaskCard";

const AllTask = () => {
  const { allTask } = useAllTask();
  return (
    <div className="px-4">
      <h1 className="text-center text-3xl font-bold my-4">
        All Task {allTask.length}
      </h1>
      <div className=" mx-auto grid md:grid-cols-3 gap-6 ">
        {allTask.map((task, index) => (
          <TaskCard key={index} task={task} />
        ))}
      </div>
    </div>
  );
};

export default AllTask;
