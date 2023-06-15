import { useQuery } from "@tanstack/react-query";

const useAllTask = () => {
  const { data: allTask = [], refetch } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await fetch(
        "https://task-managment-server-peach.vercel.app/tasks"
      );
      const data = await res.json();
      return data;
    },
  });
  return { allTask, refetch };
};

export default useAllTask;
