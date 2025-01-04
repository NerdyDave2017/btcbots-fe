import useAxiosInstance from "./useAxiosInstance";
import { useMutation } from "@tanstack/react-query";
import useSetCookies from "./useSetCookies";
import { UserData } from "@/types";
import { queryClient } from "@/providers/tanstack-provider";
import avatar from "@/public/assets/icons/profile-icon.png";

interface SignInData {
  email: string;
  password: string;
}

interface SignUpData {
  email: string;
  password: string;
  name: string;
  referrer?: string;
}

interface SignInSocialData extends Omit<SignUpData, "password"> {
  avatar: string;
  isEmailVerified: boolean;
}

interface UpdateProfileData {
  name: string;
  avatar: string;
  notifications: {
    weekly_report: boolean;
    withdraw_activity: boolean;
    password_change: boolean;
    payment_success: boolean;
  };
}

interface WithdrawData {
  amount: number;
  walletAddress: string;
  currency: string;
  otp: string;
}

interface CreateBotData {
  strategy: string;
  profitCurrency: string;
  depositCurrency: string;
  exchange: string;
  apiKey: string;
  apiSecret: string;
  apiPassphrase: string;
}

export const useSignIn = () => {
  const authAxios = useAxiosInstance();

  const signIn = async (signInData: SignInData) => {
    const { data } = await authAxios.post("/login", {
      ...signInData,
    });

    // @ts-ignore
    useSetCookies("auth_token", data.authToken);

    return data.user as UserData;
  };

  return useMutation({
    mutationKey: ["user"],
    mutationFn: signIn,
  });
};

export const useSignUp = () => {
  const axios = useAxiosInstance();

  const signUp = async (signUpData: SignUpData) => {
    const { data } = await axios.post("/sign-up", {
      ...signUpData,
    });

    return data;
  };

  return useMutation({
    mutationKey: ["user"],
    mutationFn: signUp,
  });
};

export const useSignInSocial = () => {
  const axios = useAxiosInstance();

  const signInSocial = async (signInSocialData: SignInSocialData) => {
    const { data } = await axios.post("/login-social", {
      ...signInSocialData,
    });

    // @ts-ignore
    useSetCookies("auth_token", data.authToken);

    return data.user as UserData;
  };

  return useMutation({
    mutationKey: ["user"],
    mutationFn: signInSocial,
  });
};
// Upload profile picture
export const useUploadFile = () => {
  const axios = useAxiosInstance();

  const uploadFile = async (formData: FormData) => {
    const { data } = await axios.post("/upload-file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  };

  return useMutation({
    mutationKey: ["user"],
    mutationFn: uploadFile,
  });
};

export const useUpdateProfile = () => {
  const axios = useAxiosInstance();

  const updateProfile = async (profileData: UpdateProfileData) => {
    const { data } = await axios.post("/update-profile", {
      ...profileData,
    });

    return data;
  };

  return useMutation({
    mutationKey: ["user"],
    mutationFn: updateProfile,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useForgotPassword = () => {
  const axios = useAxiosInstance();

  const forgotPassword = async (email: string) => {
    const { data } = await axios.post("/forgot-password", {
      email,
    });

    return data;
  };

  return useMutation({
    mutationKey: ["forgot-password"],
    mutationFn: forgotPassword,
  });
};

export const useResetPassword = () => {
  const axios = useAxiosInstance();

  const resetPassword = async (resetPasswordData: {
    password: string;
    otp: string;
  }) => {
    const { data } = await axios.post("/reset-password", {
      ...resetPasswordData,
    });

    return data;
  };

  return useMutation({
    mutationKey: ["reset-password"],
    mutationFn: resetPassword,
  });
};

export const useVerifyEmail = () => {
  const axios = useAxiosInstance();

  const verifyEmail = async (otp: string) => {
    const { data } = await axios.post("/verify-email", {
      otp,
    });

    return data;
  };

  return useMutation({
    mutationKey: ["verify-email"],
    mutationFn: verifyEmail,
  });
};

export const useUpgradePlan = () => {
  const axios = useAxiosInstance();

  const upgradePlan = async (planId: string) => {
    const { data } = await axios.post("/upgrade-plan", {
      planId,
    });

    return data;
  };

  return useMutation({
    mutationKey: ["upgrade-plan"],
    mutationFn: upgradePlan,
  });
};

export const useWithdraw = () => {
  const axios = useAxiosInstance();

  const withdraw = async (withdrawData: WithdrawData) => {
    const { data } = await axios.post("/withdraw", {
      ...withdrawData,
    });

    return data;
  };

  return useMutation({
    mutationKey: ["withdraw"],
    mutationFn: withdraw,
  });
};

export const useSendOtp = () => {
  const axios = useAxiosInstance();

  const sendOtp = async (id: string) => {
    const { data } = await axios.post("/send-otp", {});

    return data;
  };

  return useMutation({
    mutationKey: ["send-otp"],
    mutationFn: sendOtp,
  });
};

export const useReadNotifications = () => {
  const axios = useAxiosInstance();

  const readNotifications = async (userId: string) => {
    const { data } = await axios.post(`/read-notifications?_id=${userId}`);

    return data;
  };

  return useMutation({
    mutationKey: ["read-notifications"],
    mutationFn: readNotifications,
    onSettled: (res) => {
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
  });
};

export const useCreateBot = () => {
  const axios = useAxiosInstance();

  const createBot = async (botData: CreateBotData) => {
    const { data } = await axios.post("/create-bot", {
      ...botData,
    });

    return data;
  };

  return useMutation({
    mutationKey: ["create-bot"],
    mutationFn: createBot,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["bots"] });
    },
  });
};

export const useUpdateBot = () => {
  const axios = useAxiosInstance();

  const updateBot = async (botData: {
    bot_id: string;
    intent?: string;
    apiKey?: string;
    apiSecret?: string;
    apiPassphrase?: string;
  }) => {
    const { data } = await axios.post("/update-bot", {
      ...botData,
    });

    return data;
  };

  return useMutation({
    mutationKey: ["update-bot"],
    mutationFn: updateBot,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["bots"] });
    },
  });
};

export const useUploadProfileImage = (userId: string) => {
  const axios = useAxiosInstance();

  const uploadProfileImage = async (formData: FormData) => {
    const { data } = await axios.post(
      `/upload-profile-picture?_id=${userId}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return data.url as string;
  };

  return useMutation({
    mutationKey: ["upload-profile-image"],
    mutationFn: uploadProfileImage,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useDeleteAccount = () => {
  const axios = useAxiosInstance();

  const deleteAccount = async () => {
    const { data } = await axios.post("/delete-account");

    return data;
  };

  return useMutation({
    mutationKey: ["delete-account"],
    mutationFn: deleteAccount,
  });
};

export const useVerifyInvoicePayment = () => {
  const axios = useAxiosInstance();

  const verifyInvoicePayment = async (_id: string) => {
    const { data } = await axios.post("/verify-invoice-payment", {
      _id,
    });

    return data;
  };

  return useMutation({
    mutationKey: ["verify-invoice-payment"],
    mutationFn: verifyInvoicePayment,
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
  });
};

export const useDecode = () => {
  const axios = useAxiosInstance();

  const decode = async (token: string) => {
    const { data } = await axios.get(
      `https://www.googleapis.com/oauth2/v2/userinfo`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  };

  return useMutation({
    mutationKey: ["decode"],
    mutationFn: decode,
  });
};
