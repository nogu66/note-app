import { useNavigate } from 'react-router-dom';

export const Top = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/post', { state: { id: 1 } });
	};
	return (
		<div>
			<h1>Top</h1>
			<button onClick={handleClick}>投稿</button>
		</div>
	);
};
