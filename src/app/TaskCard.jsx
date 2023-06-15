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
        fetch(`https://task-managment-server-peach.vercel.app/tasks/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  const handleUpdateStatus = (id, status) => {
    fetch(`https://task-managment-server-peach.vercel.app/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire("Updated!", "Your Task Status has been update.", "success");
        }
      });
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
                onClick={() => handleUpdateStatus(_id, "working")}
                className="btn btn-warning"
              >
                Start Working
              </button>
            ) : (
              <button
                disabled={status === "completed"}
                onClick={() => handleUpdateStatus(_id, "completed")}
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
