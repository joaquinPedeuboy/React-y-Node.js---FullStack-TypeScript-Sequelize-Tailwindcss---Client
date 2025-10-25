import { Puff } from "react-loader-spinner"

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50 text-center">
      <Puff
        visible={true}
        height={80}
        width={80}
        ariaLabel="cargando"
      />
      <p className="mt-6 text-gray-600 text-lg font-semibold animate-pulse">
        Cargando...
      </p>
    </div>
  )
}
