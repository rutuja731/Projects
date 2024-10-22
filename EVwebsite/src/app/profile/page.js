import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../componants/navbar";



import { FiMail, FiBookmark, FiItalic, FiGlobe, FiGift , FiMapPin, FiPhone } from '../assets/icons/vander'



export default function Profile(){
    return(
        <>
          <Navbar navClass="navbar-white"/>
            <div className="container-fluid relative px-3">
                <div className="layout-specing">
                    <div className="grid grid-cols-1">
                        <div className="profile-banner relative text-transparent rounded-md shadow dark:shadow-gray-700 overflow-hidden">
                            <input id="pro-banner" name="profile-banner" type="file" className="hidden"/>
                            <div className="relative shrink-0">
                                <Image src='/images/bg/b17.jpg' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="h-80 w-full object-cover" id="profile-banner" alt=""/>
                                <div className="absolute inset-0 bg-black/70"></div>
                                <label className="absolute inset-0 cursor-pointer" htmlFor="pro-banner"></label>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-12 grid-cols-1">
                        <div className="xl:col-span-3 lg:col-span-4 md:col-span-4 mx-6">
                            <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 -mt-48">
                               

                                <div className="border-t border-gray-100 dark:border-gray-700">
                                    <h5 className="text-xl font-semibold mt-4">Personal Details :</h5>
                                    <div className="mt-4">
                                        <div className="flex items-center">
                                            <FiMail className="fea icon-ex-md text-slate-400 me-3 w-6 h-6"/>
                                            <div className="flex-1">
                                                <h6 className="text-green-600 dark:text-white font-medium mb-0">Email :</h6>
                                                <Link href="" className="text-slate-400">calvin@hotmail.com</Link>
                                            </div>
                                        </div>
                                       
                                        
                                        <div className="flex items-center mt-3">
                                            <FiGlobe className="fea icon-ex-md text-slate-400 me-3 w-6 h-6" />
                                            <div className="flex-1">
                                                <h6 className="text-green-600 dark:text-white font-medium mb-0">Website :</h6>
                                                <Link href="" className="text-slate-400">www.cristina.com</Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-3">
                                            <FiGift className="fea icon-ex-md text-slate-400 me-3 w-6 h-6"/>
                                            <div className="flex-1">
                                                <h6 className="text-green-600 dark:text-white font-medium mb-0">Birthday :</h6>
                                                <p className="text-slate-400 mb-0">2nd March, 1996</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-3">
                                            <FiMapPin className="fea icon-ex-md text-slate-400 me-3 w-6 h-6"/>
                                            <div className="flex-1">
                                                <h6 className="text-green-600 dark:text-white font-medium mb-0">Location :</h6>
                                                <Link href="" className="text-slate-400">Beijing, China</Link>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-3">
                                            <FiPhone className="fea icon-ex-md text-slate-400 me-3 w-6 h-6"/>
                                            <div className="flex-1">
                                                <h6 className="text-green-600 dark:text-white font-medium mb-0">Cell No :</h6>
                                                <Link href="" className="text-slate-400">(+12) 1254-56-4896</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="xl:col-span-9 lg:col-span-8 md:col-span-8 mt-6">
                            <div className="grid grid-cols-1 gap-6">
                                <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <h5 className="text-xl font-semibold">Calvin Carlo</h5>
                        
                                    <p className="text-slate-400 mt-3">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                                </div>

                                <div className="p-6 relative rounded-md shadow dark:shadow-gray-700 bg-white dark:bg-slate-900">
                                    <h5 className="text-xl font-semibold">My EVs :</h5>
                
                                    
                        
                                               
                                                    
                                                </div>
                                            </div>
                                            )
                                        
                                     
                                </div>
                            </div>
                        </div>
                    </div>
                
           
        </>
    )
}






