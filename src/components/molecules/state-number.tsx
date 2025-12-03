import React from "react";
import { Text } from "../ui/text";
import { Heading } from "../ui/heading";

type StateNumberProps = {
  label: string;
  value: string;
};

export function StateNumber({ label, value }: StateNumberProps) {
  return (
    <div>
      <Heading variant="h2">{value}</Heading>
      <Text variant="sm" color="muted">
        {label}
      </Text>
    </div>
  );
}
