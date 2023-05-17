import { initializeApp } from "firebase/app";
import {getFirestore,addDoc,getDoc,getDocs,deleteDoc,updateDoc,collection,doc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "e-commerce-react-pf.firebaseapp.com",
  projectId: "e-commerce-react-pf",
  storageBucket: "e-commerce-react-pf.appspot.com",
  messagingSenderId: "1024381328400",
  appId: "1:1024381328400:web:e05eea8e50e8b236983e95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Constante para consultar a mi base de datos
const bdd = getFirestore()

//FUNCIONES PARA TRABAJAR CON LA BASE DE DATOS

//Funciones del CRUD de los productos (tratamientos)
export const createProducts = async () => {
    const promise = await fetch ('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async(prod)=>{
        await addDoc(collection(bdd,"tratamientos"),{
            nombre: prod.nombre,
            categoria: prod.categoria,
            precio: prod.precio,
            stock: prod.stock,
            duracion: prod.duracion,
            img: prod.img

        })
    })
}

export const getProducts = async () => {
    const prods = await getDocs (collection(bdd,"tratamientos"))
    const items = prods.docs.map (prod =>{
        return {...prod.data(),id:prod.id}
    })
    return items
}

export const getProduct = async (id) => {
    const prod = await getDoc (doc(bdd,"tratamientos",id))
    const item = {...prod.data(),id:prod.id}
    return item
}

export const updateProduct = async(id,info) =>{
    await updateDoc(doc(bdd,"tratamientos",id),info)
}

export const deleteProduct = async (id,info) => {
    await deleteDoc(doc(bdd,"tratamientos",id))
}

//Funciones de Create and Read de ordenes de compra
export const createOrdenCompra = async(usuario, precioTotal,cart,fecha) => {
    const ordenCompra = await addDoc (collection(bdd,"ordenCompra"),{
        cliente: usuario,
        items: cart,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd,"ordenCompra"),id)
    const item = {...ordenCompra.data(),id:ordenCompra.id}
    return item
}