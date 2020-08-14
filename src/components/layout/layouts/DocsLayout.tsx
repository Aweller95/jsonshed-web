/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PropsWithChildren } from 'react'

import { SEO } from '../../config'
import { Footer, SideNav, Header } from '..'
import { ColorModeButton } from '../../inputs'
import useViewport from '../../../hooks/useViewport'

export default function DocsLayout({ children }: PropsWithChildren<any>) {
  const { isMobile } = useViewport()
  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        margin: '0.7rem auto 0 auto',
        maxWidth: '100%',
        padding: `0 1rem`,
      }}
    >
      <SEO title="Documentation" />
      <Header />
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        {!isMobile && <SideNav />}
        <section
          sx={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
            p: 0,
            ...(!isMobile && { p: 4 }),
            ml: 0,
            ...(!isMobile && { ml: '12rem' }),
          }}
        >
          {children}
        </section>
      </main>
      <Footer
        sx={{ zIndex: 0, marginLeft: '13.5rem', marginBottom: '0.6rem' }}
      />
      <ColorModeButton />
    </div>
  )
}
