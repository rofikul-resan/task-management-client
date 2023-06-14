import moment from "moment";
import { useEffect, useState } from "react";

const TaskCard = ({ task }) => {
  const [targetTimeStr, setTargetTimeStr] = useState("");
  const { title, description, targetTime, name, _id, status } = task;
  const currentTime = moment();
  const futureTime = moment(targetTime);
  const differenceInMillie = futureTime.diff(currentTime);
  const targetEndTime = moment.duration(differenceInMillie);
  console.log(targetEndTime);

  useEffect(() => {
    const hours = targetEndTime.hours();
    const minutes = targetEndTime.minutes();
    const seconds = targetEndTime.seconds();
    if (hours < 0 || seconds < 0 || minutes < 0) {
      return setTargetTimeStr("Time Over");
    }
    setTargetTimeStr(`${hours} : ${minutes} : ${seconds}`);
  }, [targetEndTime]);

  const handleDeleteTask = (id) => {
    console.log(id);
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
        <p>
          {" "}
          <span className="font-semibold italic">End Time : </span>{" "}
          {targetTimeStr}
        </p>
        <div className="card-actions mt-6 justify-end">
          <button
            onClick={() => handleUpdateStatus(_id)}
            className="btn btn-warning"
          >
            completed
          </button>
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
