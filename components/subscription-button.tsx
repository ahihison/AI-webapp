"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Zap } from "lucide-react";
import { useState } from "react";

interface SubscriptionButtonProps {
  isPro: boolean;
}
const SubscriptionButton = ({ isPro = false }: SubscriptionButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const onClick = async () => {
    try {
      setIsLoading(true);
      const respone = await axios.get("/api/stripe");
      window.location.href = respone.data.url;
    } catch (e) {
      console.log(e, "BILLING_ERROR");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Button
        variant={isPro ? "default" : "premium"}
        onClick={onClick}
        disabled={isLoading}
      >
        {isPro ? "Manage your account" : "Upgrade"}
        {!isPro && <Zap className="w-4 h-4 ml-2 fill-white" />}
      </Button>
    </div>
  );
};

export default SubscriptionButton;
