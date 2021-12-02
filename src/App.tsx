import img from "./img/img.png"
import avatar from "./img/avatar.png"

const Card: React.FC<{ img: string, avatar: string }> = ({ img, avatar }) => {
  return (
    <div className="w-[22.5rem] rounded-[10px] overflow-hidden shadow-xl mx-auto">
      <div className="w-full h-[211px] overflow-hidden group">
        <img
          src={img}
          alt="Bahasa Indonesia"
          className="object-center object-cover group-hover:scale-110 duration-200 ease-in-out"
        />
      </div>
      <div className="bg-white px-4 pt-[25px] pb-[28px]">
        <div>
          <h1 className="text-2xl font-semibold text-[#092C4C]">Bahasa Indonesia</h1>
          <p className="text-gray-400">Kelas I Sekolah Dasar</p>
        </div>
        <div className="pt-[30px] flex space-x-3 items-center">
          <div className="relative">
            <img
              src={img}
              alt="Bahasa Indonesia"
              className="object-center object-cover w-[56px] h-[56px] rounded-full"
            />
          </div>
          <div>
            <h3 className="text-[#092C4C] text-xl font-semibold">Cici Sang Putri</h3>
            <p className="text-base text-gray-500">Guru SDN 01 Pekanbaru</p>
          </div>
        </div>
        <div className="pt-8 flex justify-between items-center font-semibold">
          <h1 className="text-xl text-[#092C4C]">Rp. 90.000</h1>
          <button type="button" className="border-2 border-[#092C4C] text-[#092C4C] rounded-xl py-2 px-3 font-semibold hover:bg-[#092C4C] hover:text-white duration-300 ease-in-out">
            Lihat Kelas
          </button>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center">
      <div className="container py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} img={img} avatar={avatar} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
