import { useEffect, useState } from 'react'

export default function Csr() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/hello')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className='mt-[50px]'>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className='flex-column flex justify-center gap-[20px]'>
            <div>
              <h3 className='text-[30px]'>{item.name}</h3>
              <img src={item.photo} alt='photo' />
            </div>
          </div>
        )
      })}
    </div>
  )
}
