import { card } from "../assets/asset"
import styles, {layout} from "../style"
import Button from "./Button" 




const CardDeal = () => {
  return (
    <section className={layout.section}>

      <div className={layout.sectionInfo}>
        
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/>
        in a few steps </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Compare credit cards from top banks and find the perfect match for your lifestyle. 
          Get exclusive offers, cashback rewards, and low interest rates. 
          Apply online in minutes and get instant approval.
        </p>
        <Button styles="mt-10" />
        
         </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>

    </section>
  )
}

export default CardDeal