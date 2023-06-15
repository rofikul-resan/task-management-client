import Swal from "sweetalert2";
import useAllTask from "../hook/useAllTask";

const TaskCard = ({ task }) => {
  const { title, description, name, _id, status } = task;
  const { refetch } = useAllTask();

  const handleDeleteTask = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch;
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleUpdateStatus = (id) => {
    console.log(id);
  };

  return (
    <div className="card bg-base-300 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {" "}
          <span className="font-semibold italic">Details : </span> {description}
        </p>
        <p>
          {" "}
          <span className="font-semibold italic">Task Added By : </span> {name}
        </p>
        <p>
          {" "}
          <span className="font-semibold italic">Status : </span> {status}
        </p>

        <div className="card-actions mt-6 justify-end">
          <div>
            {status === "pending" ? (
              <button
                onClick={() => handleUpdateStatus(_id)}
                className="btn btn-warning"
              >
                Start Working
              </button>
            ) : (
              <button
                onClick={() => handleUpdateStatus(_id)}
                className="btn btn-warning"
              >
                completed
              </button>
            )}
          </div>
          <button
            onClick={() => handleDeleteTask(_id)}
            className="btn btn-primary"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
