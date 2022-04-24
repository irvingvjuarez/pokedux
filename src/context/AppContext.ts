import { createContext } from "react";
import { IInitialState } from "../types";

export const AppContext = createContext<IInitialState | null>(null)