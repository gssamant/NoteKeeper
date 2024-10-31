import { isFluxStandardAction } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addNote, updateNote } from '../redux/slice';

const Home = () => {
	const [title, setTitle] = useState('');
	const [value, setValue] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();
	const noteID = searchParams.get("noteID")
	const dispatch = useDispatch();

	function createNote() {
		const note = {
			title: title,
			content: value,
			_id: noteID || Date.now().toString(21),
			createdAt: new Date().toISOString(),
		}
		
		if (noteID) {
			//update
			dispatch(updateNote(note));
		}
		else {
			//create
			dispatch(addNote(note));
		}

		setTitle('');
		setValue('');
		setSearchParams({})

	}

	return (
		<div>
			<div className='flex flex-row gap-5 place-content-between mt-4'>
			<input
				className='p-2 rounded-2xl mt-2 w-[80%] pl-5'
				type='text'
				placeholder='Enter the title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
				<button
					onClick={createNote}
					className='p-2 rounded-xl mt-2'>
				{
					noteID ? "Update " : "Create"
				}
			</button>
			</div>
			<div className='mt-4'>
				<textarea
					className='rounded-2xl mt-4 min-w-[500px] p-4'
					value={value}
					placeholder='Enter content'
					onChange={(e) => setValue(e.target.value)}
					rows={20}
				/>
			</div>
		</div>
	)
}

export default Home
