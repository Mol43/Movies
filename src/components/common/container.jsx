export const Container = ({className, children}) => {
  return (
    <div className={`max-w-[1330px] px-4 mx-auto text-white ${className}`}>
        {children}
    </div>
  )
}
