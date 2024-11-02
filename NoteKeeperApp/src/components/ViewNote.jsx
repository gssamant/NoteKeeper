import React from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


const ViewNote = () => {

	const { id } = useParams();
	const allNotes = useSelector((state) => state.note.notes);
	const note = allNotes.filter((p) => p._id === id)[0];

	return (
		<div>
			<div className='flex flex-row gap-5 place-content-between mt-4'>
				<input
					className='p-2 rounded-2xl mt-2 w-[80%] pl-5'
					type='text'
					value={note.title}
					disabled
				/>
				<button
					className='mt-2'
					onClick={() => {
						navigator.clipboard.writeText(note?.content)
						toast.success("Copied to clipboard")
					}}>
					Copy
				</button>
			</div>
			<div className='mt-4'>
				<textarea
					className='rounded-2xl mt-4 min-w-[500px] p-4'
					value={note.content}
					disabled
					rows={20}
				/>
			</div>
		</div>
	)
}

export default ViewNote
