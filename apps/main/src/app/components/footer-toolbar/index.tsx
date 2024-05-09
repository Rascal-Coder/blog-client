import RaDialog from '@/app/Dialog'
import { Card } from './card'
import { Dock } from './dock'
import { DockCard } from './dock-card'
import './style.scss'
interface GradIent {
  icon: string
  name: string
  value: string
}
interface Props {
  gradIents: GradIent[]
}
export const FooterToolbar: React.FC<Props> = ({ gradIents }) => {
  return (
    <div className='fixed left-0 bottom-0 w-screen  h-[50px] bg-[#efefef] py-2 px-3 box-border '>
      <div className='relative flex-center'>
        <RaDialog trigger={<div>weather</div>}>
          <div className='container'>
            <div className='left-info'>
              <div className='pic-gradient'></div>
              <div className='today-info'>
                <h2>周一</h2>
                <span>1 Apr 2024</span>
                <div>
                  <i className='bx bx-current-location'></i>
                  <span>云南，丽江</span>
                </div>
              </div>
              <div className='today-weather'>
                <i className='qi-101 weather-icon'></i>
                <h1 className='weather-temp'>25°C</h1>
                <h3>晴</h3>
              </div>
            </div>
            <div className='right-info'>
              <div className='day-info'>
                <div>
                  <span className='title'>降雨概率</span>
                  <span className='value'>4 %</span>
                </div>
                <div>
                  <span className='title'>湿度</span>
                  <span className='value'>34 %</span>
                </div>
                <div>
                  <span className='title'>风速</span>
                  <span className='value'>6 km/h</span>
                </div>
              </div>
              <ul className='days-list'>
                <li>
                  <i className='weather-icon qi-101'></i>
                  <span>周二</span>
                  <span className='day-temp'>23°C</span>
                </li>
                <li>
                  <i className='weather-icon qi-101'></i>
                  <span>周三</span>
                  <span className='day-temp'>23°C</span>
                </li>
                <li>
                  <i className='weather-icon qi-101'></i>
                  <span>周四</span>
                  <span className='day-temp'>23°C</span>
                </li>
                <li>
                  <i className='weather-icon qi-101'></i>
                  <span>周五</span>
                  <span className='day-temp'>23°C</span>
                </li>
              </ul>
              <div className='btn-container'>
                <button className='loc-button'>搜索城市</button>
              </div>
            </div>
          </div>
        </RaDialog>
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
