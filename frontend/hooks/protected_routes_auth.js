export function requireAuth(gssp) {
  return async (context) => {
    const { req } = context;
    const token = req.cookies.token;
    console.log(token);

    if (!token) {
      return {
        redirect: {
          destination: "/signin",
          permanent: false,
        },
      };
    }
    return await gssp(context);
  };
}
