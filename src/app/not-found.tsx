import { FeedbackState } from "@/components/molecules/feedback-state";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="container py-20">
      <FeedbackState
        state="not-found"
        actions={
          <Button asChild>
            <Link href="/">Go to Homepage</Link>
          </Button>
        }
      />
    </div>
  );
}
