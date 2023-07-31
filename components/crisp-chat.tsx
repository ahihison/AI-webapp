"use client";

import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("f10e5829-b463-4db9-9dd6-34ec92f87583");
  }, []);
  return null;
};
