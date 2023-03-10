import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

  const Drawer = () => {

    const menu = [
        { 
          name : 'Community',
          path : 'community',
          list: [
            {
              name: "Sub Community",
              path: "sub-community",
            },
            {
              name: "Sub Community",
              path: "sub-community",
            },
            {
              name: "Sub Community",
              path: "sub-community",
            },
            {
              name: "Sub Community",
              path: "sub-community",
            },
          ]
        },
        { 
          name : 'Travel Club Benefits',
          path : 'travel-club-benifits',
        },
        { 
          name : 'Resouces',
          path : 'resources',
        },
        { 
          name : 'FAQs',
          path : 'faqs',
        },
      ]
  return (
    <div>
        {menu && <ul className='flex flex-col'>
          {menu.map((item, i) =>(
                <li key={i}>
                    <a className='flex gap-1 items-center text-black text-[16px] font-medium py-[10px]' href={item.path}>{item.name}
                    {item.list && <FiChevronDown />}
                    </a>
                    
                    { item.list && <ul className='bg-white border p-3 rounded shadow-sm'>
                        {
                            item.list.map((sub, subIndex) =>(
                                <li key={subIndex}><a className='block leading-[1.3] py-[5px] text-black text-[16px] font-medium' href={sub.path}>{sub.name}</a></li>
                            ))
                        }
                    </ul>
                    }
                    </li>
            ))}
        </ul>}
        
    </div>
  )
}

export default Drawer