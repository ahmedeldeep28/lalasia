"use client";
import { FeedbackState } from "@/components/molecules/feedback-state";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container py-20">
      <FeedbackState
        state="error"
        message={error.message}
        actions={<Button onClick={() => reset()}>Try again</Button>}
      />
    </div>
  );
}
