import './ProductCard.styles.css'
import { Link } from 'react-router-dom'
import MedsSvg from '../Svgs/MedsSvg'

const ProductCard = ({ product }) => {
  const { id, name, strength, formulation } = product

  const formattedFormulation = formulation.charAt(0).toUpperCase() + formulation.slice(1)
  const fullProductName = `${name} ${formattedFormulation} ${strength}`

  return (
    <Link
      to={`/products/${id}`}
      state={{ ...product, formattedFormulation, fullProductName }}
      className='product-card-link-wrapper'
      aria-label={`To ${name} ${formulation} ${strength} product page`}>
      <div
        className='product-card-container py-3'
        id={id}>
        <h3>{name}</h3>
        <div className='product-icon-container'>
          <MedsSvg
            className='product-card-icon'
            height='32'
            width='32' />
        </div>
        <ul className='product-details-list'>
          <li>Type: {formattedFormulation}</li>
          <li>Strength: {strength}</li>
        </ul>
      </div>
    </Link>
  )
}

export default ProductCard