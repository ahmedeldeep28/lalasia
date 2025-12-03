"use client";
import { FeedbackState } from "@/components/molecules/feedback-state";

export default function ErrorPage({ error }: { error: Error }) {
  return <FeedbackState state="error" message={error.message} />;
}
