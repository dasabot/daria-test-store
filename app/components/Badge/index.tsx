import clsx from 'clsx'
import { BadgeProps } from './types'

const Badge = ({ text, className, textClassName }: BadgeProps) => (
  <div
    className={clsx(
      className,
      'bg-white border rounded-[25.61px] px-[12.8px] py-[6.4px] franklinGothicFont text-[15px] font-medium',
    )}
  >
    <span className={clsx(textClassName, 'franklinGothicFont text-[15px] font-medium')}>
      {text}
    </span>
  </div>
)

export default Badge
