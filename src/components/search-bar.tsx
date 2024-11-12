import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBar() {
	return (
		<div className="max-w-md mx-auto">
			<div className="relative">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<FaMagnifyingGlass className="w-4 h-4 text-zinc-500" />
				</div>
				<input
					type="search"
					name="search"
					className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
					placeholder="github username"
					required
				/>
				<button
					type="submit"
					className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
				>
					Search
				</button>
			</div>
		</div>
	);
}

export default SearchBar;
