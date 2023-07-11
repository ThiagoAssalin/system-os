import Btn from "./components/btn";
import OsList from "./components/osList";


export default function Home() {
  return (
    <main className="flex justify-center">
      <Btn>CriarOs</Btn>
      <OsList/>
    </main>
  )
}
