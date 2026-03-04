import React from 'react'
import { assets } from '../assets/assets'
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("footer");
  return (
        <div className='bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9 invert opacity-80' />
                    <p className='text-sm'>
                        {t("description")}
                    </p>
                    <div className='flex items-center gap-3 mt-4'>
                        <img src={assets.instagramIcon} alt="instagram-icon" className='w-6'/>
                        <img src={assets.facebookIcon} alt="facebook-icon" className='w-6'/>
                        <img src={assets.twitterIcon} alt="twitter-icon" className='w-6'/>
                        <img src={assets.linkendinIcon} alt="linkendin-icon" className='w-6'/>
                    </div>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>{t("company")}</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">{t("links.about")}</a></li>
                        <li><a href="#">{t("links.careers")}</a></li>
                        <li><a href="#">{t("links.press")}</a></li>
                        <li><a href="#">{t("links.blog")}</a></li>
                        <li><a href="#">{t("links.partners")}</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>{t("support")}</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">{t("links.help")}</a></li>
                        <li><a href="#">{t("links.safety")}</a></li>
                        <li><a href="#">{t("links.cancel")}</a></li>
                        <li><a href="#">{t("links.contact")}</a></li>
                        <li><a href="#">{t("links.accessibility")}</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='font-playfair text-lg text-gray-800'>{t("stayUpdated")}</p>
                    <p className='mt-3 text-sm'>
                        {t("subscribeText")}
                    </p>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white rounded-l border border-gray-300 h-9 px-3 outline-none' placeholder={t("placeholder")} />
                        <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                            {/* Arrow icon */}
                           <img src={assets.arrowIcon} alt="arrow-icon" className='w-3.5 invert' />
                        </button>
                    </div>
                </div>
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} QuckStay. {t("rights")}</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">{t("links.privacy")}</a></li>
                    <li><a href="#">{t("links.terms")}</a></li>
                    <li><a href="#">{t("links.sitemap")}</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer