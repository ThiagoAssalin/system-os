'use client'
import { useState } from "react";
import { Modal,Button } from "@nextui-org/react";
import OsList from "./components/osList";


export default function Home() {

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };


  return (
    <main className="flex justify-center items-center h-screen w-screen">
      <div className="fixed bottom-0 right-0 m-3">
        <Button auto shadow onPress={handler} >
        Criar OS
        </Button>
      </div>
      <OsList/>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        
        <Modal.Body>
          <div className="flex flex-col justify-center items-center">
            <input type="text" placeholder="Nome do Solicitante" className="border-2 w-4/5 rounded-xl px-2 mb-1"></input>
            <textarea  className="border-2 h-24 resize-none w-4/5 rounded-xl px-2" placeholder="Descrição do problema"></textarea>
          </div>
          
          
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            Fechar
          </Button>
          <Button auto onPress={closeHandler}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  )
}
