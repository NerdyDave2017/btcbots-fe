import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Notification {
  weekly_report: boolean;
  withdraw_activity: boolean;
  password_change: boolean;
  payment_success: boolean;
}

export interface UserData {
  _id: string;
  name: string;
  status: string;
  mobile: string;
  email: string;
  role: string;
  avatar: string;
  isEmailVerified: boolean;
  intercom: string;
  referralId: string;
  isPhoneVerified: boolean;
  referralTokens: number;
  socialLogin: boolean;
  notifications: Notification;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export type Strategy = {
  name: string;
  return: string;
  direction: string;
  leverage: string;
  minimum_deposit: string;
  maximum_deposit: string;
  market_type: string;
  safety_net: string;
  deposit_coin: string;
  profit_coin: string;
  isAvailable: boolean;
};

export type CardDetails = {
  bot: string;
  logo?: StaticImport;
  profitCurrencyImg: StaticImport;
  depositCurrencyImg: StaticImport;
  denomination?: string;
  wallets: any[];
  exchanges: string[];
  strategy: Strategy;
};

export interface ModalProps {
  isOpen: boolean;
  onOpen: () => void;
  closeModal: () => void;
  onToggle: () => void;
  children?: React.ReactNode;
  size?: "lg" | "md" | "sm" | "xl";
}
