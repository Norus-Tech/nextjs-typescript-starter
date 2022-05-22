import { getSession } from "next-auth/react";
import { CurrentUser } from "../modules/User";

/**
 * Strapi Admin Authentication Sample
 * @param context
 * @returns
 */
export const AuthenticateAdmin = async (context: any) => {
  const session = await getSession(context);
  const user = session?.user as CurrentUser;

  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  } else {
    if (user.user.role.type !== "admin") {
      return {
        redirect: {
          destination: "/not-found",
          permanent: false,
        },
      };
    }
  }
  return {
    props: {}, // will be passed to the page component as props
  };
};
