import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

interface UseGetMembersProps {
  workspaceId: string;
}

export const useGetMembers = ({ workspaceId }: UseGetMembersProps) => {
  const query = useQuery({
    queryKey: ["members", workspaceId],
    queryFn: async () => {
      const resp = await client.api.members.$get({ query: { workspaceId } });

      if (!resp.ok) {
        throw new Error("Failed to fetch members");
      }

      const { data } = await resp.json();
      return data;
    },
  });

  return query;
};
