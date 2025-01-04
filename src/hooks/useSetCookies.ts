import { setCookie } from "cookies-next";

const useSetCookies = (name: string, value: any) => {
  const duration = new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000);

  setCookie(name, value, {
    expires: duration,
  });
};

export default useSetCookies;
