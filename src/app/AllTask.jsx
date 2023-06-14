const AllTask = () => {
  return (
    <div className="px-4">
      <h1 className="text-center text-3xl font-bold my-4">All Task</h1>
      <div className="w-10/12 mx-auto">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">task title title!</h2>
            <p>
              {" "}
              <span className="font-semibold italic">Details : </span> If a dog
              chews shoes whose shoes does he choose?
            </p>
            <p>
              {" "}
              <span className="font-semibold italic">Status : </span> Working
            </p>
            <p>
              {" "}
              <span className="font-semibold italic">Start Time : </span>{" "}
              Working
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning">completed</button>
              <button className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;
