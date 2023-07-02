import {FC} from 'react'

interface TableItemProps {
    name: string
    type: 'component' | 'modifier' | 'responsive'
    description: string
}

const TableItem: FC<TableItemProps> = ({name, type, description}) => {
    return (
        <tr>
            <td className='font-normal w-3/12'>
                <span className='font-mono lovercase'>{name}</span>
            </td>
            <td className='w-1/12'>
                { type === 'component' 
                    && <span className='badge badge-sm badge-ghost w-20'>{type}</span>
                }
                { type === 'modifier' 
                    && <span className='badge badge-sm badge-outline w-20'>{type}</span>
                }
                { type === 'responsive' 
                    && <span className='badge badge-sm badge-success w-20'>{type}</span>
                }
            </td>
            <td className='w-4/12 min-w-[20rem]'>{description}</td>
        </tr>
    )
}
export default TableItem