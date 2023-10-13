import React from "react";
import recipes from '../recipes.js'
import Swal from "sweetalert2";

const Menu = () => {

    const handleOrder = (id) => {
        console.log(id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })

          swalWithBootstrapButtons.fire({
            title: 'Do you want to add this item to cart?',
            text: "",
            icon: 'question',
            showCancelButton: false,
            confirmButtonText: 'Yes, add it!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                'Added!',
                'Item has added to cart.',
                'success'
              )
            }
          })
    }

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This weeks offers!</h2>
                <button>Online Menu</button>
            </div>
            <div className="cards">
                {
                    recipes.map((recipe, index) => {
                        return (
                            <div className="menu-items" key={index}>
                                <img src={recipe.image} alt={recipe.title} />
                                <div className="menu-content">
                                    <div className="heading">
                                        <h5>{recipe.title}</h5>
                                        <p>{recipe.price}</p>
                                    </div>
                                    <p>{recipe.description}</p>
                                    <button className="orderBtn" onClick={() => handleOrder(recipe.id)}>Add to Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu;