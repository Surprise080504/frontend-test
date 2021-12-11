import { FC } from 'react'

const Section: FC<{ id: string }> = ({ id, children }) => (
  <section id={id} data-type="widget">
    {children}
  </section>
)

export default Section
