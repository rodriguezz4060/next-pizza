import { cn } from '@/shared/lib/utils'
import { CircleCheck } from 'lucide-react'
import React from 'react'

interface Props {
  imageUrl: string
  name: string
  price: number
  activate?: boolean
  onClick?: () => void
  className?: string
}

export const IngredientItem: React.FC<Props> = ({
  imageUrl,
  name,
  price,
  activate,
  onClick,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex items-center  flex-col p1 rounded-md w-32 text-center relative cursor-pointer shadow-md bg-white',
        { 'border border-primary': activate },
        className
      )}
      onClick={onClick}
    >
      {activate && <CircleCheck className='absolute top-2 right-2 text-primary' />}
      <img width={110} height={110} src={imageUrl} />
      <span className='text-xs mb-1'>{name}</span>
      <span className='font-bold'>{price} ₴</span>
    </div>
  )
}
