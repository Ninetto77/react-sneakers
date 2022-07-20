import Card from "./components/Card"
import Header from "./components/Header"
import Drawer from "./components/Drawer"

const arr =
[
        { title: ' Mens sneakers Nike Blazer Mid Suede', imageURL: "/img/sneakers/1.jpg", price: 12999 },
        { title: ' Mens sneakers Nike Air Max 270', imageURL: "/img/sneakers/2.jpg", price: 15600 },
        { title: ' Mens sneakers Nike Blazer Mid Suede', imageURL: "/img/sneakers/3.jpg", price: 8499 },
        { title: ' Sneakers Puma X aka Boku future Rider', imageURL: "/img/sneakers/4.jpg", price: 15600 }
]

function App() {
  return (
      <div className="wrapper clear">
          <Drawer />
          <Header />

        <div className="content p-40"> 
            <div className="d-flex align-center justify-between mb-40">
                <h1>All sneakers</h1>  
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="Search" />
                    <input placeholder="Search..."/>
                </div>
            </div>


              <div className="d-flex">
                  {/*<div className="content p-40"> */}{/*{arr.map(obj => (<b>{obj.name}</b>))}*/}
                  {/*</div>*/}
                  {arr.map(obj => (
                      <Card
                          title={obj.title}
                          imageURL = { obj.imageURL }
                          price = {obj.price}
                  />
                  ))}
            </div>
        </div>
      </div>
  );
}


    

export default App;
