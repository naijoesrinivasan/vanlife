// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, getDocs, doc, query, where } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuGiSGClrzZq3-bgwyyiXDGV5IM-yxXiQ",
    authDomain: "vanlife-77812.firebaseapp.com",
    projectId: "vanlife-77812",
    storageBucket: "vanlife-77812.appspot.com",
    messagingSenderId: "160493006343",
    appId: "1:160493006343:web:b31aa0ba598d0370e704a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef);
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    return dataArr;
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id);
    const vanSnapshot = await getDoc(docRef);

    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", 123))
    const querySnapshot = await getDocs(q);
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(dataArr)
    return dataArr;
}

// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : '/api/host/vans';
//     const res = await fetch(url);

//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch host vans",
//             statusText: res.statusText,
//             status: res.status
//         };
//     }
//     const data = await res.json();
//     return data.vans;
// }
export async function loginUser(creds) {
    const { email, password } = creds;

    const q = query(collection(db, "users"),
        where('email', '==', email),
        where('password', '==', password));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data)
        return Object.assign((data[0]), ({ message: "Have a nice day" }));
    } else {
        throw {
            message: "Your username or password is incorrect",
            status: 404
        }
    }
    return true;
}
// export async function loginUser(creds) {
//     const res = await fetch("/api/login", { method: "post", body: JSON.stringify(creds) })
//     const data = await res.json()

//     if (!res.ok) {
//         throw {
//             message: data.message,
//             statusText: res.statusText,
//             status: res.status
//         }
//     }

//     return data
// }