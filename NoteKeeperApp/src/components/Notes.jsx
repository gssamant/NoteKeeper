import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../redux/slice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Notes = () => {
	const notes = useSelector((state) => state.note.notes);
	const [searchTerm, setSearchTerm] = useState('');

	const dispatch = useDispatch();

	const filteredData = notes.filter(
		(note) => note.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	function handleDelete(noteID) {
		dispatch(deleteNote(noteID));
	}

	return (
		<div>
			<input
				className='p-2 rounded-xl mt-2 min-w-[600px]'
				type='search'
				placeholder='search a note'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<div className='flex flex-col gap-5 mt-4'>
				{
					filteredData.length > 0 &&
					filteredData.map(
						(note) => {
							return (
								<div className='border' key={note?._id}>
									<div>
										{note.title}
									</div>
									<div>
										{note.content}
									</div>
									<div className='flex flex-row gap-4 place-content-evenly'>
										<button>
											<Link to={`/?noteID=${note?._id}`}>
												Edit
											</Link>
										</button>
										<button>
											<Link to={`/notes/${note?._id}`}>
												View
											</Link>
										</button>
										<button onClick={() => handleDelete(note?._id)}>
											Delete
										</button>
										<button onClick={() => {
											navigator.clipboard.writeText(note?.content)
											toast.success("Copied to clipboard")
										}}>
											Copy
										</button>
										<button>
											Share
										</button>
									</div>
									<div>
										{note.createdAt}
									</div>
								</div>
							)
						}
					)
				}
			</div>

		</div>

	)
}

export default Notes
