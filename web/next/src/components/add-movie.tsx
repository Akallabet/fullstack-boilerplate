'use client'

function addMovie () {
		return fetch("/movies/", { method: 'POST',
    headers:{
			"Content-Type": "application/json"
    },
			body: JSON.stringify({
				title: "Sandokan",
			})
			 })
}
export default function AddMovieButton () {

					return <button onClick={addMovie}>Add movie</button>
}
