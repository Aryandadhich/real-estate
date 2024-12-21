import "./singlePage.scss";
import Slider from '../../components/slider/slider';
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";

function SinglePage() {
    return (
        <div className='singlePage'>
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images} />
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src="/pin.png" alt="" />
                                    <span>{singlePostData.address}</span>
                                </div>
                                <div className="price">₹ {singlePostData.price}</div>
                            </div>
                            <div className="user">
                                <img src={userData.img} alt="" />
                                <span>{userData.name}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            {singlePostData.description}
                        </div>
                    </div>

                </div>
            </div>
            <div className="features">
                <div className="wrapper">
                    <p className="title">General</p>
                    <div className="listVertical">
                        <div className="feauture">
                            <img src="/utility.png" alt="" />
                            <div className="textfeature">
                                <span>Utilities</span>
                                <p>Renter is responsible</p>
                            </div>
                        </div>
                        <div className="feauture">
                            <img src="/pet.png" alt="" />
                            <div className="textfeature">
                                <span>Pet Policy</span>
                                <p>Pets Allowed</p>
                            </div>
                        </div>
                        <div className="feauture">
                            <img src="/fee.png" alt="" />
                            <div className="textfeature">
                                <span>Property Fees</span>
                                <p>must have 3x the rent in total household income</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Sizes</p>
                    <div className="sizes">
                        <img src="/size.png" alt="" />
                        <div className="sizemeasure">
                            <span>80sqm (861sqft)</span>
                        </div>
                    </div>
                    <div className="sizes">
                        <img src="/bed.png" alt="" />
                        <div className="sizemeasure">
                            <span>2 bed</span>
                        </div>
                    </div>
                    <div className="sizes">
                        <img src="/bath.png" alt="" />
                        <span>1 bathroom</span>
                    </div>
                    <p className="title">Nearby Places</p>
                    <div className="listHorizontal">
                        <div className="feauture">
                            <img src="/school.png" alt="" />
                            <div className="textfeature">
                                <span>School</span>
                                <p>250m away</p>
                            </div>
                        </div>
                        <div className="feauture">
                            <img src="/pet.png" alt="" />
                            <div className="textfeature">
                                <span>Bus Stop</span>
                                <p>100m away</p>
                            </div>
                        </div>
                        <div className="feauture">
                            <img src="/fee.png" alt="" />
                            <div className="textfeature">
                                <span>Restaurant</span>
                                <p>200m away</p>
                            </div>
                        </div>
                    </div>
                    <p className="title">Location</p>
                    <div className="mapContainer">
                        <Map items={[singlePostData]} />
                    </div>
                    <div className="buttons">
                        <button>
                            <img src="/chat.png" alt="chat icon" />
                            Send a Message
                        </button>
                        <button>
                            <img src="/save.png" alt="" />
                            Save the Place
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SinglePage
