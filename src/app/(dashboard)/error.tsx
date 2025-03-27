"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangleIcon } from "lucide-react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col gap-y-2 items-center justify-center">
      <AlertTriangleIcon />
      <p className="text-sm text-muted-foreground">Something went wrong</p>
      <Button variant={"secondary"}>
        <Link href={"/"}>Back to Home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
