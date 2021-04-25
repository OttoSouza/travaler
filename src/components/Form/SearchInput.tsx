import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

import { RiSearch2Line } from "react-icons/ri";
import { useStates } from "../../hooks/useState";
import { colors } from "../../util/colors";

export const SearchInput = () => {
  const { handleSearch } = useStates();

  return (
    <FormControl
      w={["350px", "350px", "350px", "400px", "400px"]}
      bg={colors.backgroundColor}
      borderRadius="xl"
    >
      <InputGroup>
        <InputLeftElement
          children={<RiSearch2Line />}
          color={colors.complement}
        />
        <Input
          placeholder="Qual cidade esta procurando?"
          onChange={handleSearch}
          color={colors.complement}
          focusBorderColor="gray.500"
        />
      </InputGroup>
    </FormControl>
  );
};
