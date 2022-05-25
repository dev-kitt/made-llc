import { CardNFT } from "./CardNFT"
import './cards.css'
import Plx from 'react-plx'
    
const CardMain = () => {
    return (
        <section id='nft'>
            <div className="container card__container">
                <div className="card__container-parallax">
                    <Plx
                        parallaxData={[
                            {
                            start: 0,
                            end: 420,
                            properties: [
                                {
                                startValue: 1,
                                endValue: 0,
                                property: "opacity"
                                },
                                {
                                startValue: 0.5,
                                endValue: 1.18,
                                property: "scale"
                                }
                            ]}
                        ]}
                        style={{
                            width: "100%",
                            height: 0,
                            top: 0,
                            left: 0,
                            position: "fixed",
                          }}
                    >
                        <img src={require("../../assets/smoke.png")} alt="made" />
                    </Plx>
                </div>
                <div className="card__container-nft">
                    <CardNFT />
                </div>
            </div>
        </section>
  )
}

export default CardMain

