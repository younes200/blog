export default function PageTitle({ children }) {
  return (
    <h1 className="font-serif text-3xl font-extrabold leading-9 tracking-tight  sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 post-title">
      {children}
    </h1>
  )
}
