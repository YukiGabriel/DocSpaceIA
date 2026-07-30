import GlossaryPopup from './GlossaryPopup'
import { glossary } from '../data/glossary'

interface Props {
  text: string
}

const terms = Object.keys(glossary).sort((a, b) => b.length - a.length)
const pattern = new RegExp(`(${terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi')

export default function HighlightedText({ text }: Props) {
  const parts = text.split(pattern)

  return (
    <>
      {parts.map((part, i) => {
        const key = part.toLowerCase()
        if (glossary[key]) {
          return (
            <GlossaryPopup key={i} term={key}>
              {part}
            </GlossaryPopup>
          )
        }
        return <span key={i}>{part}</span>
      })}
    </>
  )
}
