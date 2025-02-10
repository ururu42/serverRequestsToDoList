import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDYc1z_n377kIuco3yI7zQgBMdfP1TKwTg',
	authDomain: 'serverquerytask1p3.firebaseapp.com',
	projectId: 'serverquerytask1p3',
	storageBucket: 'serverquerytask1p3.firebasestorage.app',
	messagingSenderId: '724183998836',
	appId: '1:724183998836:web:00ccc1b6e0b5a2d89bcc21',
	databaseURL:
		'https://serverquerytask1p3-default-rtdb.europe-west1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
