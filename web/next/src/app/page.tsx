export default async function Home() {
	const res = await (
		await fetch("http://localhost:3042/db/movies/", { cache: "no-store" })
	).json();
	console.log(res);
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<div className="flex gap-4 items-center flex-col sm:flex-row">
					{res.map((movie: any) => (
						<p>{movie.title}</p>
					))}
				</div>
			</main>
		</div>
	);
}
