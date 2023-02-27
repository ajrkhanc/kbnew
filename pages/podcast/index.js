import Link from "next/link";
import Head from "next/head";

export default function PodCast() {
    return (
        <>
        <Head>
        <title>Podcast - Blanchard International</title>
        <meta name="description" content="High Performance Habits: How Extraordinary People Become That Way with Brendon Burchard Click to download or get access to podcast How to Lead With Emotional Courage Click to download or get access to podcast The Happiness Equation with Neil Pasricha Click to download or get access to podcast"/>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-92DL0L5P5Q"></script>
        <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                      
                        gtag('config', 'G-92DL0L5P5Q');
          `,
                    }}
                />
        </Head>
         <div className="inner-banner books-head-headbg">
            <div className="container">
                <div className="inner-title text-center">
                    <h3>PodCast</h3>
                </div>
            </div>
            <div className="inner-lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            </div>
            <div className="what-did-area pb-40 pt-45 style2 themebg">
            <div className="container">          
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <div className="what-did-left-content">
                        <div className="row row-eq-height eventsandworkshopbox">

                        <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/podcast/the-no-os-of-leadership-with-mike-easley.jpg" alt="Images"/>
                                    <h3>The No-Os of Leadership with Mike Easley</h3>                                    
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                        <Link href="/podcast/the-no-os-of-leadership-with-mike-easley"><a className="default-btn-two">LISTEN TO THE PODCAST<i className="bx bx-right-arrow-alt"></i></a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>

                        <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/podcast/humbitious-the-power-of-low-ego-high-drive-leadership-with-amer-kaissi.jpg" alt="Images"/>
                                    <h3>Humbitious: The Power of Low-Ego, High-Drive Leadership with Amer Kaissi</h3>                                    
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                        <Link href="/podcast/humbitious-the-power-of-low-ego-high-drive-leadership-with-amer-kaissi"><a className="default-btn-two">LISTEN TO THE PODCAST<i className="bx bx-right-arrow-alt"></i></a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>

                        <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/podcast/how-to-be-an-inclusive-leader-with-jennifer-brown-2.jpg" alt="Images"/>
                                    <h3>How to Be an Inclusive Leader with Jennifer Brown</h3>                                    
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                        <Link href="/podcast/how-to-be-an-inclusive-leader-with-jennifer-brown-2"><a className="default-btn-two">LISTEN TO THE PODCAST<i className="bx bx-right-arrow-alt"></i></a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/podcast/beating-burnout-with-christina-maslach.jpg" alt="Images"/>
                                    <h3>Beating Burnout with Christina Maslach</h3>                                    
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                        <Link href="/podcast/beating-burnout-with-christina-maslach"><a className="default-btn-two">LISTEN TO THE PODCAST<i className="bx bx-right-arrow-alt"></i></a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/podcast2.jpg" alt="Images"/>
                                    <h3>How to Lead With Emotional <br/>Courage</h3>                                   
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                    <Link href="#"><a className="default-btn-two">Download Podcast<i className="bx bx-right-arrow-alt"></i></a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4">
                                <div className="choose-card">
                                    <img src="/assets/img/podcast3.jpg" alt="Images"/>
                                    <h3>The Happiness Equation with Neil Pasricha</h3>                                   
                                    <div className='row text-center eventsbottomarea2'>
                                    <div className='col-sm-12'>
                                    <Link href="#"><a className="default-btn-two">Download Podcast<i className="bx bx-right-arrow-alt"></i></a></Link>
                                    </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}