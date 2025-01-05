import React from "react";
import { useRouter } from "next/navigation";
import { GoogleIcon, UserIcon } from "@/public/assets/icons";
import { useGoogleLogin } from "@react-oauth/google";
import {
  useDecode,
  useGuestSignIn,
  useSignInSocial,
} from "@/src/hooks/postRequests";
import Loader from "../../../components/loader";
import { toast } from "sonner";
import { isAxiosError } from "axios";
import { useAppContext } from "@/src/context";

const index = ({ referrer }: { referrer: string }) => {
  const router = useRouter();

  const { setIsAuthenticated, setUser } = useAppContext();

  const { mutate: GuestSignIn, isPending: guestSignInPending } =
    useGuestSignIn();
  const { mutate: SignInSocial } = useSignInSocial();
  const { mutate: Decode, data: decodeData } = useDecode();

  const handleGuestLogin = async () => {
    GuestSignIn(
      {},
      {
        onSuccess: (user) => {
          toast.success("Login successful", { position: "top-center" });

          router.push("/dashboard");
        },
        onError: (error: Error) => {
          setIsAuthenticated(false);
          setUser(null);
          if (isAxiosError(error)) {
            toast.error(error.response?.data.message, {
              position: "top-center",
            });
          } else {
            console.error(error);
            toast.error("An unexpected error occurred", {
              position: "top-center",
            });
          }
        },
      }
    );
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      loginWithGoogle(codeResponse.access_token);
    },
    onError: (e) => toast.error(`Login failed. ${e.error_description}`),
  });

  const loginWithGoogle = async (accessToken: string) => {
    Decode(accessToken, {
      onSuccess: (result) => {
        SignInSocial(
          {
            email: result.email,
            name: `${result.given_name} ${result.family_name ?? ""}`,
            referrer: referrer ?? undefined,
            avatar: result.picture ?? undefined,
            isEmailVerified: result.verified_email,
          },
          {
            onSuccess: (res) => {
              toast.success("Login Successful", { position: "top-center" });
              setUser(res);
              router.push("/dashboard");
            },
            onError: (error: Error) => {
              if (isAxiosError(error)) {
                toast.error(error.response?.data.message, {
                  position: "top-center",
                });
              } else {
                console.error(error);
                toast.error("An unexpected error occurred", {
                  position: "top-center",
                });
              }
            },
          }
        );
      },
      onError: (error: Error) => {
        if (isAxiosError(error)) {
          toast.error(error.response?.data.message, {
            position: "top-center",
          });
        } else {
          console.error(error);
          toast.error("An unexpected error occurred", {
            position: "top-center",
          });
        }
      },
    });
  };

  return (
    <div className="w-[475px] flex flex-col gap-[32px]">
      <button
        onClick={() => login()}
        className="w-full h-[55px] px-8 py-4 rounded-full border border-main justify-center items-center gap-2.5 inline-flex"
      >
        <GoogleIcon />
        <p className="text-main  font-normal ">Continue with Google</p>
      </button>

      <button
        onClick={handleGuestLogin}
        className="w-full  h-[55px] px-8 py-4 rounded-full border border-main justify-center items-center gap-2.5 inline-flex"
      >
        {guestSignInPending && <Loader bg="bg-main" />}
        {!guestSignInPending && <UserIcon className="text-main" />}
        {!guestSignInPending && (
          <p className="text-main  font-normal ">Sign in as guest</p>
        )}
      </button>
    </div>
  );
};

export default index;
