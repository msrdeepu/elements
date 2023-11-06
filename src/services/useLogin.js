// import { useNavigate } from "react-router-dom";
// import { loginFeature } from "./apiAuth";
// import { useMutation } from "@tanstack/react-query";

// export function useLogin() {
//   const navigate = useNavigate();
//   const { mutate: login, isLoading } = useMutation({
//     mutationFn: ({ email, password }) =>
//       loginFeature({
//         email,
//         password,
//       }),
//     onSuccess: (user) => {
//       console.log(user);
//       navigate("/");
//     },
//     onError: (Err) => {
//       console.log("Error", Err);
//       toast.error("Provided Email or Password are incorrect");
//     },
//   });

//   return { login, isLoading };
// }
