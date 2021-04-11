import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <div className={className}>
      <div>
        <h1 className="main-heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="custom-btn" type="submit">
          Show More
        </button>
      </div>
    </div>
  )
}

export default BannerCardItem
