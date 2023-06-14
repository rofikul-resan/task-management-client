import { useQuery } from "@tanstack/react-query";

const useAllTask = () => {
  const { data } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      fetch();
    },
  });
  return { data };
};

export default useAllTask;
