import Btn from "./components/btn";
import OsList from "./components/osList";


export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Btn>CriarOs</Btn>
      <OsList/>
    </main>
  )
}
