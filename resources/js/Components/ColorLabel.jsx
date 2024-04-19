export default function ColorLabel({children, color}) {
  return (
    <span className= {`text-sm p-1 rounded-lg `+ color || "sr-only"}>
        {children}
  </span>
  )
}