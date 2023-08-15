import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const withAuth = (Component) => {
  return function ProtectedRoute(props) {
    const [token, setToken] = useState(null);
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("access_token");

      if (token) {
        try {
          // convert token saved in localStorage
          // of type string to javascript object
          const parsedToken = JSON.parse(token);
          if (parsedToken === "") {
            router.push("/login");
          } else {
            setToken(true);
          }
        } catch (err) {
          router.push("/login");
        }
      } else {
        router.push("/login");
      }
    }, [router]);

    return <>{token ? <Component {...props} /> : <div>loading</div>}</>;
  };
};

export default withAuth;
