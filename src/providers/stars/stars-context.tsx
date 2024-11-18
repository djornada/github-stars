import {
	createContext,
	useEffect,
	useState,
	useContext,
	type ReactNode,
} from "react";
import type { GHData } from "../../App";
import { useLazyQuery } from "@apollo/client";
import { GET_STARS } from "../../queries";

type StarsContextType = {
	stars?: GHData;
	error?: string;
	loading?: boolean;
	setUsername: (username: string) => void;
};

export const StarsContext = createContext<StarsContextType>(
	{} as StarsContextType,
);

function StarsContextProvider({
	children,
}: { children: ReactNode }): ReactNode {
	const [stars, setStars] = useState<GHData | undefined>(undefined);
	const [username, setUsername] = useState<string>("");

	const [getStars, { data, error, loading }] = useLazyQuery<GHData>(GET_STARS, {
		variables: {
			username,
		},
	});

	useEffect(() => {
		if (username) {
			getStars({
				variables: {
					username,
				},
			});
		}
	}, [username, getStars]);

	useEffect(() => {
		if (data) {
			setStars(data);
		}
	});

	return (
		<StarsContext.Provider
			value={{
				stars,
				error: error?.message,
				loading,
				setUsername,
			}}
		>
			{children}
		</StarsContext.Provider>
	);
}

function useStars(): StarsContextType {
	const context = useContext(StarsContext);
	if (context === undefined) {
		throw new Error("useStars must be used within a StarsContextProvider");
	}
	return context;
}

export { StarsContextProvider, useStars };
