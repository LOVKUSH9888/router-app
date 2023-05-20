import {Link} from "react-router-dom"

const Products = () => {
  return (
    <main>
    <div className='pg-header'>
      <div className='container'>
        <div className='row align-items-center'>
        <div className='col-lg-7'>
        <h1>Products</h1>
        </div>
        <div className='col-lg-5'>
          <nav>
            <ol className='breadcrumb justify-content-end'>
              <li className='breadcrumb-item'>
                <Link to = "/">Home</Link>
              </li>
            </ol>
          </nav>
        </div>
        </div>
      </div>
    </div>
      
    </main>
  )
}

export default Products
