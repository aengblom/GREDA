import React from "react";
import Image from '../Components/Image';
import { Link } from "react-router-dom";

const MedicineBottle = () => {
  return (
    <div className="wrapper">
      <div className="breadcrumb breadcrumbs-parent">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><Link to="/recycle">Recycling Guide</Link></li>
            <li class="breadcrumb-item"><Link to="/recycle/container">Containers</Link></li>
            <li class="breadcrumb-item"><Link to="/recycle/container/plasticwithnonumbers">Plastic with no Numbers</Link></li>
            <li class="breadcrumb-item active" aria-current="page">Medicine Bottle</li>
          </ol>
        </nav>

      </div>
      <h1 className="text-center h1-em mb-5">Medicine Bottle</h1>
      <div className="text-center">
        <Image src="http://via.placeholder.com/100x100" className="text-center" />
      </div>
      <h3 className="h2-em" style={{ fontSize: "1em" }}> <i class="fa fa-times-circle" aria-hidden="true" style={{
        backgroundColor: "none",
        color: "#dc3545",
        borderRadius: "50%",
        fontSize: "2rem",
        marinRight: "2rem"
      }} ></i> Not Recyclable</h3>
      <p>
        If these are not accepted by your city’s home
  recycling service. Many curbside recycling
  programs that accept #1 and #2 plastic will
  take medicine bottles made with that material.
  However, some limit #1 and #2 plastic
  collection to tubs and bottles of a certain size
  and shape. Check with your recycler to find
  out their policies on plastic collection.
  Municipalities that accept #5 plastic are fewer
  and farther between.
      </p>
      <h3 className="h3-em">Other Recycling Options</h3>
      <ul>
        <li>
          Check if your local recycling center
  accepts #5 plastic
        </li>
        <li>
          You can also recycle #5 plastic through a
  service called Gimme 5. The program is
  run by Preserve, which makes consumer
  products from recycled plastic. Whole
  Foods Market is a major partner in the
  Gimme 5 initiative and has #5 plastic
  collection bins in many of its stores. If
  you do not live near a Whole Foods, you
  can mail all your #5 plastic to Preserve
  using the address on their website. There
  is no charge to recycle these plastics.
        </li>
      </ul>
      <h3 className="h3-em smaller-size">Reuse</h3>
      <p>Old medicine bottles can be reused as storage
containers for items such as sewing supplies,
screws, nails and small hair accessories. They
also look great incorporated into light fixtures,
turned into vases or used as molds for
homemade crayons.</p>
      <h3 className="h3-em smallest-size" >Hide-a-key</h3>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <p>Lorem ipsum dolor sit amet,
  consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et
  dolore magna aliqua.
</p>
          </div>
          <div className="col-4">
            <Image src="http://via.placeholder.com/100x100" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default MedicineBottle;
