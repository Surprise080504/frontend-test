import { useEffect, useState } from 'react'
import { clipboard } from 'common/utils'
import CopyIcon from 'components/icons/copy'
import { Wrapper, Label, Link } from './styled'

type Props = {
  link: string
}

const CopyLink = ({ link }: Props) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 4000)
    }
  }, [copied])

  const handleCopy = () => {
    clipboard.writeText(link).then(() => setCopied(true))
  }

  return (
    <Wrapper>
      <Label>Copy Magiclytics link</Label>
      <Link onClick={handleCopy} title="Copy link">
        <CopyIcon /> {link}
      </Link>
    </Wrapper>
  )
}

export default CopyLink
