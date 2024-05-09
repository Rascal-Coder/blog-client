import { Card } from './card'
import { Dock } from './dock'
import { DockCard } from './dock-card'
interface GradIent {
  icon: string
  name: string
  value: string
}
interface Props {
  gradIents: GradIent[]
}
const SideToolbar: React.FC<Props> = ({ gradIents }) => {
  return (
    <div className='fixed left-0 bottom-0 w-screen  bg-[#efefef] py-2 px-3 box-border '>
      <div className='relative flex-center'>
        <div>weather</div>
        <Dock>
          {gradIents.map(gradIent => (
            <DockCard key={gradIent.value} gradIent={gradIent}>
              <Card icon={gradIent.icon} value={gradIent.value} name={gradIent.name} />
            </DockCard>
          ))}
        </Dock>
        <div>Music</div>
        <div>Notes</div>
      </div>
    </div>
  )
}

export default SideToolbar
