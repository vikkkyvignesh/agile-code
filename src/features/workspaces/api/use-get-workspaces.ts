import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

export const useGetWorkspaces = () => {
  const query = useQuery({
    queryKey: ["workspaces"],
    queryFn: async () => {
      const resp = await client.api.workspaces.$get();

      if (!resp.ok) {
        throw new Error("Failed to fetch workspaces");
      }

      const { data } = await resp.json();
      return data;
    },
  });

  return query;
};
