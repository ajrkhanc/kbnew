import Link from "next/link";
import Head from "next/head";

export default function PodCastinner() {
    return (
        <>
        <Head>
        <title>Podcast - Beating Burnout with Christina Maslach</title>
        <meta name="description" content="Beating Burnout with Christina Maslach"/>
        <link rel="icon" href="/favicon.ico" />
        </Head>
         
            <div className="what-did-area pb-40 pt-45 style2 themebg">
            <div className="container">            
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="what-did-left-content">
                        <div className="row row-eq-height eventsandworkshopbox">
                            <div className="col-sm-8">
                                <div className="podcastd">
                                <h3>Beating Burnout with Christina Maslach</h3>
                                <iframe allowfullscreen="" height="192" mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true" scrolling="no" src="https://play.libsyn.com/embed/episode/id/25153776/height/192/theme/modern/size/large/thumbnail/yes/custom-color/59a3d4/time-start/00:00:00/playlist-height/200/direction/backward/download/yes" title="Embed Player" webkitallowfullscreen="true" width="100%"></iframe>
                                <div>
                                    <p>In this episode, hear Bill Treasurer share tips for becoming a more confident and competent leader from his latest book, <i>Leadership Two Words at a Time.</i> His message is especially helpful for new leaders, but leaders at all levels will find wisdom in his words.</p>
                                    <p>
                                    For more information about Bill Treasurer, visit <a target="_blank" href='https://www.couragebuilding.com'>www.couragebuilding.com</a>
                                    </p>
                                </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/podcast/podcastall.jpg" alt="Images"/>                                                                   
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                    <Link href="/podcast"><a className="default-btn-two">View all Podcasts<i className="bx bx-right-arrow-alt"></i></a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>

                           
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}