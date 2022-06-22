import AddClientModal from '../components/AddClientModal'
import Clients from '../components/Clients'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
      <div className="dflex gap-3 mb-4">
        <AddClientModal />
      </div>      
      <Projects />
      <hr />
      <Clients />
    </>
  )
}
