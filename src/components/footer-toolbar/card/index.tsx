import SvgIcon from '@/components/svg-icon'
import styles from './styles.module.scss'

interface CardProps {
  icon: string
  name: string
}

export const Card = ({ icon, name }: CardProps) => (
  <>
    <div className={styles.card}>
      {icon.includes('local-icon') ? (
        <SvgIcon localIcon={icon.split(' ')[1]} width='30px' height='30px'></SvgIcon>
      ) : (
        <SvgIcon icon={icon} width='30px' height='30px'></SvgIcon>
      )}

      <div className='color-blue text-12px'>{name}</div>
    </div>
  </>
)
