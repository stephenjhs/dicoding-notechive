import { Helmet, HelmetProvider } from "react-helmet-async"

export default function Head({ children, title }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </HelmetProvider>
  )
}
