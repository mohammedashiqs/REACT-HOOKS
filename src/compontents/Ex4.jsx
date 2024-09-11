import React, { Fragment, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Ex4 = (props) => {
  const URL = 'https://fakestoreapi.com';

  const [products, setProducts] = useState([]); // To store the API data

  const getProducts = async () => {
    await fetch(`${URL}/products`)
      .then(res => res.json())
      .then(out => {
        console.log(out);
        setProducts(out);
      }).catch(error => console.log(error.message));
  }


  // Pagination States
  const [currentPage, setCurrentPage] = useState(0);
  const [productsPerPage] = useState(5);
  const [productsItemsPerPage, setProductsItemPerPage] = useState([]);
  const [paginationCount, setPaginationCount] = useState(0);

  useEffect(() => {
    document.title = 'Product Store'
    getProducts()

    const paginationCount = products.length / productsPerPage;
    setPaginationCount(Math.ceil(paginationCount));

    const indexOfLastProduct = currentPage + productsPerPage;

    setProductsItemPerPage(products.slice(currentPage, indexOfLastProduct));


  }, [products]);

  const handler = (e) => {
      setCurrentPage(Number(e.selected * paginationCount))
  }



  if (products.length === 0) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className='text-warning' >No Products in server..!</h5>
          </div>
        </div>
      </div>
    )
  } else {

    return (
      <Fragment>
        <div className="container my-5">
          <div className="row">
            {
              productsItemsPerPage.map((product, index) => {
                return (
                  <div className='col-xs-12 col-sm-12 col-md-4 offset-xl-4 col-xxl-4'>
                    <div className="card shadow">
                      <div className="card-header text-center">
                        <img src={product.image ? product.image : '#'} alt="" className='img-fluid p-2' style={{height: '400px'}}/>
                        <h5 className='card-title'>{product.title}</h5>
                      </div>
                      <div className="card-body">
                        <ul className="list-group">
                          <li className="list-group-item">
                            <strong>Price</strong>
                            <span className='float-end text-success'>&#8377; {product.price}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 offset-md-3 col-md-6 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 offset-xxl-3 col-xxl-6">
              <ReactPaginate
                className='pagination'
                pageCount={0}
                pageClassName='page-item'
                pageLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                activeClassName='active'
                activeLinkClassName='active'
                onPageChange={handler}
              />
            </div>
          </div>
        </div>
      </Fragment>
    )

  }


}

export default Ex4;
