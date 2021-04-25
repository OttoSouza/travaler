import { LinkProps, Text } from "@chakra-ui/react";

import Link from "next/link";
import { colors } from "../../util/colors";
interface ActiveLinkProps extends LinkProps {
  isSelected: boolean;
  label: string;
}

export function ActiveLink({ isSelected, label }: ActiveLinkProps) {

  
  return isSelected ? (
    <Link href="#">
      <a>
        <Text
          fontWeight="bold"
          color={colors.title}
          borderBottomWidth="1px"
          borderColor={colors.orange}
        >
          {label}
        </Text>
      </a>
    </Link>
  ) : (
    <Link href="#">
      <a>
        <Text
          fontWeight="normal"
          color={colors.subtitle}
          borderColor={colors.subtitle}
        >
          {label}
        </Text>
      </a>
    </Link>
  );
}
