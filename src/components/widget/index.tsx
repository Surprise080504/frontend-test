import { FC, useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import ShareIcon from 'components/icons/share'
import Modal from 'components/modal'
import { PrimaryButton } from 'components/button'
import {
  Section,
  Header,
  Content,
  ShareButton,
  SharedImage,
  Prompt,
  Watermark,
} from './styled'

type Props = {
  title: string
}

const Widget: FC<Props> = ({ title, children }) => {
  const sectionRef = useRef<HTMLElement>(null)
  const shareRef = useRef<HTMLButtonElement>(null)
  const watermarkRef = useRef<HTMLDivElement>(null)

  const [isSharing, setSharing] = useState(false)
  const [isPreparing, setPreparing] = useState(false)
  const [dataUrl, setDataUrl] = useState('')

  const share = async () => {
    setSharing(true)
    if (sectionRef.current && shareRef.current && watermarkRef.current) {
      setPreparing(true)
      shareRef.current.style.display = 'none'
      watermarkRef.current.style.display = 'unset'
      setDataUrl(await toPng(sectionRef.current))
      shareRef.current.style.display = 'unset'
      watermarkRef.current.style.display = 'none'
      setPreparing(false)
    }
  }

  return (
    <>
      <Section ref={sectionRef}>
        <Header>
          <span>{title}</span>
          <ShareButton onClick={share} ref={shareRef}>
            <ShareIcon />
          </ShareButton>
        </Header>
        <Content>{children}</Content>
        <Watermark ref={watermarkRef}>Check yours at Magiclytics.com</Watermark>
      </Section>
      <Modal isOpen={isSharing} onClose={() => setSharing(false)}>
        {isPreparing ? (
          <Prompt>Preparing the image...</Prompt>
        ) : (
          <>
            <Prompt>
              <b>Tap and hold</b> on the
              <br /> image below to save it:
            </Prompt>
            <SharedImage src={dataUrl} />
            <PrimaryButton as="a" href="instagram://app">
              Go to Instagram
            </PrimaryButton>
          </>
        )}
      </Modal>
    </>
  )
}

export default Widget
