// import { useQuery } from "@tanstack/react-query";
// import { UseAuth } from "../Contexts/AuthContexts";
// import useAxiosSecure from "../Hook/AxiosSecure";


// const useRole = () => {
//   const { user } = UseAuth();
//   const axiosSecure = useAxiosSecure();

//   const {
//     data: role = "user",
//     isLoading: roleLoading,
//     error
//   } = useQuery({
//     queryKey: ["user-role", user?.email],
//     enabled: !!user?.email,  
//     staleTime: 5 * 60 * 1000,

//     queryFn: async () => {
//       const res = await axiosSecure.get(`/users/${user.email}/role`);
//       return res.data?.role || "user";
//     },
//   });

//   return { role, roleLoading, error };
// };

// export default useRole;


import { useQuery } from "@tanstack/react-query";
import { UseAuth } from "../Contexts/AuthContexts";
import useAxiosSecure from "../Hook/AxiosSecure";

const useRole = () => {
  const { user } = UseAuth();
  const axiosSecure = useAxiosSecure();

  const { data: role = "user", isLoading: roleLoading } = useQuery({
    queryKey: ["user-role"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/users/role");
      return res.data?.role || "user";
    },
  });

  return { role, roleLoading };
};

export default useRole;
