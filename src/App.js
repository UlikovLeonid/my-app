import React from 'react';
import s from './App.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


function App(props) {

	return (
		<BrowserRouter>
			<div className={s.app_wrapper}>
				<Header />
				<Navbar />
				<div className={s.app_wrapper_content}>
					<Route path='/dialogs'
						render={() =>
							<Dialogs
								state={props.state.dialogsPage} />} />
					<Route path='/profile'
						render={() => <Profile
							state={props.state.profilePage} />} />
					<Route path='/news'
						render={() => <News />} />
					<Route path='/music'
						render={() => <Music />} />
					<Route path='/settings'
						render={() => <Settings />} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
