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
    <Dock>
      {gradIents.map(gradIent => (
        <DockCard key={gradIent.value} gradIent={gradIent}>
          <Card icon={gradIent.icon} name={gradIent.name} />
        </DockCard>
      ))}
    </Dock>
  )
}

export default SideToolbar
