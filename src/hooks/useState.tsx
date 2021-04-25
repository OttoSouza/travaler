import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  ChangeEvent,
} from "react";
import { api } from "../services/api";
import { useContext } from "react";

interface States {
  id: string;
  title: string;
  image: string;
  places: string;
}

interface StatesProviderProps {
  children: ReactNode;
}

interface StatesContextData {
  states: States[];
  filterStates: States[];
  isLoading: boolean;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const StatesContext = createContext<StatesContextData>({} as StatesContextData);

export function StatesProvider({ children }: StatesProviderProps) {
  const [states, setStates] = useState<States[]>([]);
  const [filterStates, setFilterStates] = useState<States[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get("/states").then((response) => {
      setStates(response.data);
    });
  }, []);

  useEffect(() => {
    setFilterStates(
      states.filter((state) =>
        state.title.toLowerCase().includes(search.toLowerCase())
      )
    );
    setIsLoading(true);
  }, [search, states]);

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  return (
    <StatesContext.Provider
      value={{ states, handleSearch, filterStates, isLoading , search}}
    >
      {children}
    </StatesContext.Provider>
  );
}

export function useStates() {
  const context = useContext(StatesContext);
  return context;
}
