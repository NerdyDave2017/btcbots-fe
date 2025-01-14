"use client";
import React, { useEffect, useState } from "react";

import Main from "./main";
import Withdraw from "./withdraw";
import {
  RewardData,
  useFetchRewards,
  useFetchUser,
} from "@/src/hooks/fetchRequests";
import { isAxiosError } from "axios";
import { toast } from "sonner";

export type SelectedType = "Main" | "Withdraw";

export type BalanceType = "eth" | "btc" | "usd" | "sol";

const page = () => {
  const [selected, setSelected] = useState<SelectedType>("Main");

  const [balance, setBalance] = useState<Record<BalanceType, number>>({
    eth: 0,
    btc: 0,
    usd: 0,
    sol: 0,
  });

  const [rewards, setRewards] = useState([] as RewardData[]);
  // const { data: user, isSuccess: userIsSuccess } = useFetchUser();

  const [referralLink, setreferralLink] = useState("");

  const { data: user } = useFetchUser();

  const { data: RewardsData, isSuccess, isError, error } = useFetchRewards();

  useEffect(() => {
    if (isSuccess) {
      setRewards(RewardsData.rewards);
      setBalance((prev) => ({
        btc: RewardsData.btc_balance,
        eth: RewardsData.eth_balance,
        sol: RewardsData.sol_balance,
        usd: RewardsData.usd_balance,
      }));
    }

    if (isError) {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message, {
          position: "top-center",
        });
      } else {
        toast.error("An unexpected error occurred", {
          position: "top-center",
        });
      }
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    const baseUrl = window.location.origin;

    if (user) {
      setreferralLink(`${baseUrl}/login?ref=${user.referralId}`);
    }
  }, [user]);

  return (
    <div className="w-full  pb-[48px]">
      {selected === "Main" && (
        <Main
          rewards={rewards}
          referral={referralLink}
          balance={balance}
          setSelected={setSelected}
        />
      )}

      {selected === "Withdraw" && <Withdraw setSelected={setSelected} />}
    </div>
  );
};

export default page;
