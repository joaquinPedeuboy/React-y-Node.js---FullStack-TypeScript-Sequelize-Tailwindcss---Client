import { useFetcher } from 'react-router-dom'
import Swal from 'sweetalert2'

type DeleteButtonProps = {
    productId: number
}

export default function DeleteButton({ productId }: DeleteButtonProps) {
    const fetcher = useFetcher()

    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault()

        const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: 'Esta acción no se puede deshacer',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
        })

        if (result.isConfirmed) {
        fetcher.submit(
            { id: String(productId) },
            { method: 'POST', action: `products/${productId}/delete` }
        )
        }
    }

    return (
        <button
        type="button"
        onClick={handleDelete}
        className='bg-red-600 text-white rounded-lg w-full p-2 uppercase text-center text-xs hover:bg-red-800 cursor-pointer'
        >
        Eliminar
        </button>
    )
}
