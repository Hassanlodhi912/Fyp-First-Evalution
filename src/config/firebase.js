import { initializeApp } from "firebase/app";
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut
} from "firebase/auth";
import {
    getFirestore, doc, setDoc, getDoc, collection, query, getDocs,
    getDatabase, ref, child, get
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCF8E8TlzguBp8ZzbHBN2wPRMWWtLiQ5WI",
    authDomain: "fyp-shop-by-voice.firebaseapp.com",
    projectId: "fyp-shop-by-voice",
    storageBucket: "fyp-shop-by-voice.appspot.com",
    messagingSenderId: "733930144374",
    appId: "1:733930144374:web:1a3f22cc98295a91545557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const user = auth
// console.log(user)

async function signupUser(data) {
    const { name, phoneNumber, email, password } = data
    // console.log("firebase signup", data)
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        // console.log(result)
        const { user } = response
        const { uid } = user
        const result = await setDoc(doc(db, "users", uid), {
            name,
            phoneNumber,
            email,
            uid
        })
        return { error: false, message: "User Successfully Created" }
    }
    catch (error) {
        console.log(error.message)
        return { error: true, message: error.message }
    }
}

async function loginUser(data) {
    const { email, password } = data
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        return { error: false, message: "User Successfully Logged In" }
    }
    catch (error) {
        return { error: true, message: error.message }
    }
}

async function logoutUser() {
    const auth = getAuth();
    try {
        const result = await signOut(auth)
    }
    catch (error) {
        console.log(error.message)
    }

}

async function getCurrentUserData(uid) {
    if (!uid) {
        return
    }

    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        return docSnap.data()
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}

async function updateCurrentUserData(data) {
    const { name, phoneNumber, email, uid } = data
    if (!uid) {
        return
    }
}

// async function fetchAllResturants() {
//     const q = query(collection(db, "rest"))
//     let copyData = []
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//         const combinedData = { ...doc.data(), id: doc.id }
//         copyData.push(combinedData)
//     });
//     return copyData
// }

async function fetchResturantById(id) {

    const docRef = doc(db, "rest", id)
    const docSnap = await getDoc(docRef);
    return docSnap.data()


    // const q = query(collection(db, "rest"))
    // let copyData = []
    // const querySnapshot = await getDocs(q);
    // querySnapshot.forEach((doc) => {
    //     const combinedData = { ...doc.data(), id: doc.id }
    //     copyData.push(combinedData)
    // });
    // return copyData

}

function createOrder(deliveryInfo, cartItems, uid) {
    console.log(uid)
    setDoc(doc(db, "orders", uid), {
        deliveryInfo,
        cartItems,
        uid
    })
}

export {
    auth,
    signupUser,
    loginUser,
    logoutUser,
    getCurrentUserData,
    updateCurrentUserData,
    // fetchAllResturants,
    fetchResturantById,
    createOrder
}