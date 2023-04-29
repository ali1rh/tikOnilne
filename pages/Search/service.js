/* eslint-disable @next/next/no-img-element */
import { useGlobalProvider } from "../../components/Providers/GlobalProvider"
import Image from "next/image"
import { translate } from "../../translations"
import Link from "next/link"
import styles from "../../styles/sass/pages/Search/service.module.scss"


const Services = () => {
    
    const {lang,globalSearchResult,HOST_API_IMG} = useGlobalProvider()


    return(
        <div className={styles.services}>
            <div className={styles.container}>
                <div className={styles.titleServices}>{translate.headerMenuServices[lang]}</div>
                <div className={styles.service}>
                {
                     globalSearchResult.data?.services?.map(({id,floor,logo,phone,instagram,linkedin,facebook}) =>{


                        return(
                            <Link key={id} href={`/serviceSinglePage/${id}`}>
                            <a>
                            <div key={id} className={styles.first}>
                                <div className={styles.patternBlock}>
                                    <div className={styles.patternBackground}  style={{backgroundImage:`url(/img/servicePage/secFilter/cutPattern.svg)`}}>
                                        <div className={styles.title}>
                                            <span className={styles.number}>{floor}</span>
                                            <span className={styles.floor}>{translate.MallMapPageFloor[lang]}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.bankLogoBlock}>
                                    <div className={styles.bankLogo}><img className={styles.logo} alt="bankLogo" src={HOST_API_IMG+logo}/></div>
                                </div>
                                
                                <div className={styles.hoverBlock}>
                                    
                                    {phone && <div className={styles.phonBlock}>
                                        <div className={styles.phoneIcon}><img alt="phoneIcon" src="/img/icons/whitPhoneIcon.svg"/></div>
                                        <div><a className={styles.number} href={`tel:${phone}`}>{phone}</a></div>
                                    </div>}
                                    <div className={styles.networkBlock}>
                                        {facebook && <div className={styles.facebook}><Link href={"#"}><a target="_blank"><img alt="facebook" src="/img/icons/Facebook.svg"/></a></Link></div>}
                                        {instagram && <div className={styles.instagram}><Link href={"#"}><a  target="_blank"><img alt="instagram" src="/img/icons/Instagram.svg"/></a></Link></div>}

                                    </div>
                                </div>
                                <div className={styles.brandBook}>
                                    <div className={styles.iconBook}><img alt="iconBook" src="/img/servicePage/secFilter/iconBook.svg"/></div>
                                </div>
                            </div>
                            </a>
                        </Link>
                        )
                     })
                }
                </div>
            </div>
        </div>
    )
}



export default Services