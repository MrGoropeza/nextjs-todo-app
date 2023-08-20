import { SessionContext } from "@context/session.context";
import { useContext } from "react";

export const useSession = () => useContext(SessionContext);
