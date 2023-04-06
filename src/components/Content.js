import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums']
function Content() {
// 1. useEffect (callback, [deps])  
// - Gọi Callback mỗi khi component re-render
// - Gọi Callback sau khi component thêm element vào DOM
// 2. useEffect (callback, [])
// - Chỉ  gọi callback 1 lần sau khi component mounted
// - Logic chạy 1 lần :))
// 2. useEffect (callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi
// 
  // ------------
  // 1. Callback luôn được gọi sau khi gọi component mounted
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  const [gotoTop, setGotoTop] = useState(false)
  console.log(type);
  useEffect(() => {
    console.log('title Change');
    // document.title = title
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(rs => rs.json())
    .then(posts => {
      setPosts(posts)
    })
  }, [type])
  useEffect( () => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if(window.scrollY >= 200) {
        setGotoTop(true)
      } else {
        setGotoTop(false)
      }
    }
    window.addEventListener('scroll',handleScroll)
    // Cleanup function
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  }, [])


  return (
    <div>
      {tabs.map((ele, index) => 
      (
        <button 
          key={index}
          style={ type === ele ? {
            color: '#fff',
            backgroundColor: '#333'
          } : {}}
          onClick={() => setType(ele)}
        >
          {ele}
        </button>
      )) }
      <input 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}>
      </input>
      <ul>
        {posts.map(ele => (
          <li key={ele.id}>{ele.title || ele.name}</li>
        ))}
      </ul>
      {gotoTop && (
        <button
          style={{
            position: 'fixed',
            right: 30,
            bottom: 30
          }}
        >
          Go To Top
        </button>
      )}
    </div>
  );
}
export default Content;
