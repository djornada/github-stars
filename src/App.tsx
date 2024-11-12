import { useQuery } from "@apollo/client";
import SearchBar from "./components/search-bar";
import Header from "./components/header";
import { GET_STARS } from "./queries/get-stars";
import { GrGithub } from "react-icons/gr";

type GHNode = {
	node: {
		name: string;
		url: string;
		description: string;
	};
};
type GHData = {
	user: {
		bio: string;
		avatarUrl: string;
		login: string;
		location: string;
		email: string;
		url: string;
		starredRepositories: {
			edges: GHNode[];
		};
	};
};
function App(): JSX.Element {
	const { loading, error, data } = useQuery<GHData>(GET_STARS, {
		variables: {
			username: "djornada",
		},
	});
	if (loading) {
		return <p>Loading...</p>;
	}
	if (error) {
		return <p>Error: {error.message}</p>;
	}
	return (
		<>
			<Header>
				<SearchBar />
			</Header>
			<main className="divide-x grid grid-cols-12 h-dvh mt-2">
				<aside className="col-span-3 flex flex-col items-center place-content-center">
					<div>
						<img
							className="h-32 rounded-full"
							src={data?.user.avatarUrl}
							alt={`${data?.user.login} profile`}
						/>
					</div>
					<h2 className="text-lg font-bold">{data?.user.login}</h2>
					<p className="">{data?.user.bio}</p>
				</aside>
				<section className="col-span-9 px-2 overflow-y-scroll h-dvh">
					{data?.user.starredRepositories.edges.map(
						({ node: { name, url, description } }) => (
							<a
								key={name}
								href={url}
								target="_blank"
								rel="noreferrer noopener"
								className="flex w-full items-center p-2 text-slate-800 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
							>
								<div className="mr-4 grid place-items-center">
									<GrGithub className="w-12 h-12" />
								</div>
								<div className="text-left">
									<h3 className="font-medium text-lg text-slate-800">{name}</h3>
									<p className="text-sm text-slate-500">{description}</p>
								</div>
							</a>
						),
					)}
				</section>
			</main>
		</>
	);
}

export default App;
