import Image from 'next/image'
import Link from 'next/link'
import cn from 'clsx'

import { getPokeTypeColor } from '../../helpers/functions'

interface Props {
  pokemonType: string[]
  order: number
  name: string
  img_url: string
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const Card: React.FC<Props> = ({
  pokemonType,
  order,
  name,
  img_url,
  onClick
}) => {
  const pokeIndex = order.toString().padStart(3, '0')

  return (
    <div
      className='bg-slate-300 inline-block rounded-md hover:scale-110'
      onClick={onClick}
    >
      <picture className='relative block cursor-pointer'>
        <span className='absolute top-2 left-2 z-10 bg-gray-600 text-white p-3 rounded-full'>{`#${pokeIndex}`}</span>
        <Link href='/'>
          <a>
            <Image
              alt={`${name}-${order}`}
              src={img_url}
              objectFit='contain'
              width={300}
              height={175}
              className='rounded-tl-md rounded-tr-md'
            />
          </a>
        </Link>
      </picture>
      <div className='p-5'>
        <span className='text-center block text-xl uppercase font-bold'>
          {name}
        </span>
        <ul className='flex justify-center gap-5 mt-2'>
          {pokemonType.map((poke, i) => {
            console.log(getPokeTypeColor(poke.toLowerCase()))
            const classNames = cn('w-1/2 rounded-full text-center', {
              'bg-steelType': poke.toLowerCase() === 'steel',
              'bg-waterType': poke.toLowerCase() === 'water',
              'bg-bugType': poke.toLowerCase() === 'bug',
              'bg-dragonType': poke.toLowerCase() === 'dragon',
              'bg-electricType': poke.toLowerCase() === 'electric',
              'bg-ghostType': poke.toLowerCase() === 'ghost',
              'bg-fireType': poke.toLowerCase() === 'fire',
              'bg-fairyType': poke.toLowerCase() === 'fairy',
              'bg-iceType': poke.toLowerCase() === 'ice',
              'bg-fighting': poke.toLowerCase() === 'fighting',
              'bg-normalType': poke.toLowerCase() === 'normal',
              'bg-grassType': poke.toLowerCase() === 'grass',
              'bg-psychicType': poke.toLowerCase() === 'psychic',
              'bg-rockType': poke.toLowerCase() === 'rock',
              'bg-darkType': poke.toLowerCase() === 'dark',
              'bg-groundType': poke.toLowerCase() === 'ground',
              'bg-poisonType': poke.toLowerCase() === 'poison',
              'bg-flyingType': poke.toLowerCase() === 'flying'
            })
            return (
              <li className={classNames} key={i}>
                {poke}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}