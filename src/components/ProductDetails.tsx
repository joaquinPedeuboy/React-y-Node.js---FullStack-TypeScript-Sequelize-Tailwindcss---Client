import { useNavigate, type ActionFunctionArgs, redirect, useFetcher } from 'react-router-dom'
import { formatCurrency } from "../helpers"
import type { Product } from "../types"
import { deleteProduct } from '../services/ProductService'
import DeleteButton from './DeleteButton'

type ProductDetailsProps = {
    product: Product
}

export async function action({params} : ActionFunctionArgs) {
    if(params.id != undefined) {
        await deleteProduct(+params.id)

        return redirect('/')
    }
}
export default function ProductDetails({product} : ProductDetailsProps) {

    const fetcher = useFetcher()
    const navigate = useNavigate()
    const isAvailable = product.availability

    return (
            <tr className="border-b ">
                <td className="p-3 text-lg text-gray-800">
                    {product.name}
                </td>
                <td className="p-3 text-lg text-gray-800">
                    {formatCurrency(product.price)}
                </td>
                <td className="p-3 text-lg text-gray-800">
                    <fetcher.Form method='POST'>
                        <button
                            type='submit'
                            name='id'
                            value={product.id}
                            className={`${isAvailable ? 'text-black hover:bg-gray-600' : 'text-red-900 hover:bg-red-400'} rounded-lg p-2 text-xs uppercase font-bold w-full border border-black hover:cursor-pointer `}
                        >
                            {isAvailable ? ' Disponible' : 'No disponible'}
                        </button>
                    </fetcher.Form>
                </td>
                <td className="p-3 text-lg text-gray-800 ">
                    <div className="flex gap-2 items-center">
                        <button
                            onClick={()=> navigate(`products/${product.id}/edit`)}
                            className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase text-center text-xs hover:bg-indigo-800 cursor-pointer'
                        >
                            Editar
                        </button>

                        <DeleteButton productId={product.id} />
                    </div>
                </td>
            </tr> 
    )
}
