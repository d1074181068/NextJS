export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/5`)
  const data = await res.json()
  return { props: { data } }
}

export default function Ssr({ data }) {
  return (
    <>
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
    </>
  )
}
