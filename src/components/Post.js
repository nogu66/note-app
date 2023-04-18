import React, { useState } from 'react';
import '../assets/styles/Note.css';

export const Post = () => {
	const [notes, setNotes] = useState([]);
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const onTitleChange = (e) => {
		setTitle(e.target.value);
	};

	const onBodyChange = (e) => {
		setBody(e.target.value);
	};

	const addNote = () => {
		setNotes([...notes, { title: title, body: body }]);
		setTitle('');
		setBody('');
	};

	return (
		<section>
			<div className="Note">
				<form>
					<input
						type="text"
						placeholder="タイトル"
						value={title}
						onChange={onTitleChange}
					></input>
					<textarea
						placeholder="ご自由にお書きください。"
						value={body}
						onChange={onBodyChange}
					></textarea>
				</form>
				<button onClick={addNote}>投稿</button>
			</div>
			<div className="Post">
				<ul>
					{notes.map((note, index) => (
						<li key={index}>
							<strong>{note.title}</strong>
							<p>{note.body}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
