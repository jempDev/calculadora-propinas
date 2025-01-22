import type { Dispatch, SetStateAction } from 'react'

const tipOptions = [
  {
    id: 'tip-10',
    value: 0.1,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: 0.2,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: 0.5,
    label: '50%'
  }
]
type TypPeercentageprops = {
  setTip: Dispatch<SetStateAction<number>>
  tip: number
}
export default function TipPercentageForm({
  setTip,
  tip
}: TypPeercentageprops) {
  return (
    <div>
      <h3 className='font-black text-2xl'>Propina</h3>
      <form>
        {tipOptions.map(tipOption => (
          <div key={tipOption.id}>
            <label htmlFor={tipOption.id}>{tipOption.label}</label>
            <input
              id={tipOption.id}
              type='radio'
              name='tipOption'
              value={tipOption.value}
              onChange={e => setTip(+e.target.value)}
              checked={tipOption.value === tip}
            />
          </div>
        ))}
      </form>
    </div>
  )
}
