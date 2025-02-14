// import { createContext, useState, useEffect, ReactNode } from "react";
// import Cookies from "js-cookie";
// import api from "@/lib/api";
// import { useRouter } from "next/router";

// interface User {
//   id: string;
//   email: string;
// }

// interface AuthContextType {
//   user: User | null;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

// export const AuthContext = createContext<AuthContextType | null>(null);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const checkUser = async () => {
//       try {
//         const { data } = await api.get("/auth/me");
//         setUser(data);
//       } catch {
//         setUser(null);
//       }
//     };
//     checkUser();
//   }, []);

//   const login = async (email: string, password: string) => {
//     try {
//       const { data } = await api.post("/auth/login", { email, password });
//       Cookies.set("accessToken", data.accessToken, { expires: 1, secure: true });
//       Cookies.set("refreshToken", data.refreshToken, { expires: 7, secure: true });
//       setUser(data.user);
//       router.push("/");
//     } catch (error) {
//       console.error("Login failed", error);
//     }
//   };

//   const logout = () => {
//     Cookies.remove("accessToken");
//     Cookies.remove("refreshToken");
//     setUser(null);
//     router.push("/login");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
