// import Vue from 'vue'
import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, deleteUser, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth'
import { getFirestore, doc, setDoc, collection, addDoc, query, getDocs, getDoc, where, updateDoc, deleteDoc } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
apiKey: 'AIzaSyAH9tneqY34lFvVjaYS_BrQCNH_mtFP_rM',
authDomain: 'e-shoes-ed6f0.firebaseapp.com',
projectId: 'e-shoes-ed6f0',
storageBucket: 'e-shoes-ed6f0.appspot.com',
messagingSenderId: '640345215667',
appId: '1:640345215667:web:696773b24b1bbc37fd96c6',
measurementId: 'G-R1Z4MNB0BL'
}
const firebase = initializeApp(firebaseConfig)
const auth = getAuth(firebase)
const db = getFirestore(firebase)
const storage = getStorage(firebase)

export { auth, db, storage, createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword, updateProfile, signOut, doc, setDoc, addDoc, collection, query, getDocs, getDoc, where, updateDoc, deleteDoc }
