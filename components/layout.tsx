import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  const isAlert: boolean = false;
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {isAlert ?
          <Alert preview={preview} /> :
          <div className='noAlert'></div>
        }
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
