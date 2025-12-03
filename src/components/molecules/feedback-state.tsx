"use client";

import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import Image from "next/image";
import clsx from "clsx";
import { ReactNode } from "react";

type FeedbackStateType = "empty" | "not-found" | "error";

interface DefaultState {
  title: string;
  message: string;
  image: string;
}

const defaultStates: Record<FeedbackStateType, DefaultState> = {
  empty: {
    title: "No results found",
    message:
      "There are no items to display right now. Try adjusting your filters or check back later.",
    image: "/no-results.svg",
  },
  "not-found": {
    title: "page not found",
    message:
      "This page does not exist. You can navigate to the homepage.",
    image: "/error-404.svg",
  },
  error: {
    title: "Something went wrong",
    message: "We couldn’t fetch the data. Please try again later.",
    image: "/error-500.svg",
  },
};

export interface FeedbackStateProps {
  state?: FeedbackStateType;
  title?: string;
  message?: string;
  image?: ReactNode;
  alt?: string;
  className?: string;
  actions?: ReactNode;
  imageWidth?: number;
  imageHeight?: number;
}

export function FeedbackState({
  state = "empty",
  title,
  message,
  className,
  actions,
  image,
  alt = "state image",
  imageWidth = 400,
  imageHeight = 400,
}: FeedbackStateProps) {
  const fallback = defaultStates[state];

  return (
    <Empty className={clsx("flex flex-col items-center", className)}>
      <EmptyHeader>
        <EmptyMedia>
          {image || (
            <Image
              width={imageWidth}
              height={imageHeight}
              src={fallback.image}
              alt={alt}
              loading="lazy"
            />
          )}
        </EmptyMedia>

        <EmptyTitle className="text-4xl capitalize">{title || fallback.title}</EmptyTitle>
        <EmptyDescription>{message || fallback.message}</EmptyDescription>

        {actions && <div className="mt-4">{actions}</div>}
      </EmptyHeader>
    </Empty>
  );
}
