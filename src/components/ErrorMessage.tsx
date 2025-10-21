import type { PropsWithChildren } from "react";


export default function ErrorMessage({children} : PropsWithChildren) {
  return (
    <div className="bg-red-600 text-white font-bold uppercase text-center my-4 p-3">{children}</div>
  )
}
