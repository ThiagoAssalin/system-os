"use client"
import { useState } from "react";
import OsList from "../components/osList";
import PrivateRoutes from "../components/privateRoutes";
import Modal from "../components/modal";




export default function Dashboard() {

  const [visible, setVisible] = useState(false);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
   
  

  return (
    <PrivateRoutes>
    <main className="flex justify-center items-start absolute top-28 w-screen">
      <div className="fixed bottom-0 right-0 m-3">
        <button className="border rounded-md text-white bg-cyan-500 p-1" onClick={()=>setVisible(true)}>Criar OS</button>
      </div>
      <Modal visible={visible} closeHandler={closeHandler}></Modal>
      <OsList/>
    </main>
    </PrivateRoutes>
  )
}
