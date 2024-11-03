function Header({ children }: { children: React.ReactNode }) {
	return (
		<header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10 py-4 px-6">
			{children}
		</header>
	);
}
export default Header;
