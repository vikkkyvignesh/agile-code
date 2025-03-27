import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

interface UseGetProjectsProps {
  workspaceId: string;
}

export const useGetProjects = ({ workspaceId }: UseGetProjectsProps) => {
  const query = useQuery({
    queryKey: ["projects", workspaceId],
    queryFn: async () => {
      const resp = await client.api.projects.$get({
        query: { workspaceId },
      });

      if (!resp.ok) {
        throw new Error("Failed to fetch projects");
      }

      const { data } = await resp.json();
      return data;
    },
  });

  return query;
};
