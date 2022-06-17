function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
              

            <div className="drawer" >
                <h2 className="d-flex justify-between mb-30 ">Basket <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>

                <div style={{ flex: 1 }} className="items" >
                    <div className="cartItem d-flex align-center mb-20">
                        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg">
                        </div>

                        <div className="mr-20 flex">
                            <p className="mb-5">Mens sneakers Nike Blazer Mid Suede</p>
                            <b>12 999 rub</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>

                    <div className="cartItem d-flex align-center  mb-20">
                        <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }} className="cartItemImg">
                        </div>

                        <div className="mr-20 flex">
                            <p className="mb-5">Mens sneakers Nike Blazer Mid Suede</p>
                            <b>12 999 rub</b>
                        </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>

                </div>

                <div className="cartTotalBlock">
                    <ul >
                        <li>
                            <span>Subtotal</span>
                            <div></div>
                            <b>21 498 rub</b>
                        </li>
                        <li>
                            <span>Charge 5%</span>
                            <div></div>
                            <b>1074 rub</b>
                        </li>
                    </ul>
                    <button className="greenButton">Place an order<img src="/img/arrow.svg" alt="Arrow" /></button>
                </div>

            </div>
        </div>
    )
}
export default Drawer;
