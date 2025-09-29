import {create} from 'zustand';

export const useStore = create((set) => ({
name:"",
email:"",
tel: null,

setName:(newName)=>set(()=>({name: newName})),
setEmail:(newEmail)=>set(()=>({email: newEmail})),
setTel:(newTel)=>set(()=>({tel: newTel})),
})) 