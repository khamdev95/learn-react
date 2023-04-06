import {useState} from 'react'

const gifts = ['Card', 'Moto', 'Game']
function Gift() {
    const [gift, setGift] = useState()
    const handleGetGift = () => {
      const idx = Math.floor(Math.random() * 3)
      setGift(gifts[idx])
    }
    return (
      <div>
        <h1>{gift || 'Chua Co Phan Thuong'}</h1>
        <button onClick={handleGetGift}>Get Gift</button>
      </div>
    )
}
export default Gift; 