import {create} from 'zustand';

// Global state management easily using Zustand

export const useStore = create((set) => ({
name:"",
email:"",
tel: null,

setName:(newName)=>set(()=>({name: newName})),
setEmail:(newEmail)=>set(()=>({email: newEmail})),
setTel:(newTel)=>set(()=>({tel: newTel})),
})) 
