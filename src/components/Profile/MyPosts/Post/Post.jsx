import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src='https://ff.hrw.org/sites/default/files/styles/filmmaker/public/Rothna_Begum_web_0.jpg?itok=jmwHsBrA' alt='ava' />
			{props.message}
			<div>
				<span>Like</span>
			</div>
		</div>
	)
}

export default Post;