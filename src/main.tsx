import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StarsContextProvider } from "./providers/stars/stars-context.tsx";

const client = new ApolloClient({
	uri: "https://api.github.com/graphql",
	cache: new InMemoryCache(),
	headers: {
		authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
	},
});
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<StarsContextProvider>
				<App />
			</StarsContextProvider>
		</ApolloProvider>
	</StrictMode>,
);
