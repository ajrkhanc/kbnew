import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'




export async function getServerSideProps(context) {
    const caturl = context.params.Bmeassesment;

    const res = await fetch(`https://kbblogs.vercel.app/api/bme-assessment/${caturl}`)
    const result = await res.json()
    return {
        props: {
            result
        },
    }
}

export default function result({ result }) {

    function downloadAsPDF() {
        var element = document.getElementById('demo');
        html2pdf(element);
    }

    if (!Object.keys(result).length) {
        return <div className='container'>
            <div className='row'>
                <div class="col-lg-12 contact-title nofound">

                    <h1>Nothing Found</h1>
                    <p>
                        Please Submit You Asessement Before.
                    </p>
                    <h6>
                        <a class="submit" href='/assessments/bme-assessment'> Go Back </a>
                    </h6>
                </div>
            </div>
        </div>
    }

    return (
        <>


            <Head>
                <title>BME and First Time Manager Result</title>
                <meta name="description" content="BME and First Time Manager" />
                <script src="https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"></script>
               
            </Head>


            <section className='assesmentpart2 aalpading0'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-sm-12 text-center'>
                            <button onClick={downloadAsPDF} class="submit btnnewc"> Download Result </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id='demo' className='pbb-10 pll-20 prr-20 paddingsall'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            {
                                result.slice(0, 1).map((results) => {
                                    return (
                                        <h4 className="countertoph2 text-center resh">{results.name} - Report</h4>
                                    )
                                })
                            }


                        </div>

                        <div className='col-sm-12'>
                            {
                                result.slice(0, 1).map((results) => {

                                    var px = '%'
                                    var result1 = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) + parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6) + parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9) + parseInt(results.q10)
                                
                                    var overall = result1
                                    var overresult = overall

                                    var overallresult = overresult.toFixed(2) + px
                                    var overallbar = overresult

                                    return (
                                        <>
                                            <div class="assessment-result-block">
                                                <h3>Overall Score = <span className='rco'>{overresult}</span></h3>
                                                <div class="result-bar-wrapper">
                                                    {
                                                        (() => {
                                                            if (overallbar <= 50)
                                                                return <>
                                                                <div class="result-bar bgred" style={{ width: overallresult }}></div>                                                              
                                                                </>
                                                            if (overallbar <= 68)
                                                                return <>
                                                                <div class="result-bar yellobg" style={{ width: overallresult }}></div>                                                               
                                                                </>

                                                            if (overallbar <= 82)
                                                                return <>
                                                                <div class="result-bar orangebg" style={{ width: overallresult }}></div>                                                                
                                                                </>
                                                            else (overallbar <= 100)
                                                            return <>
                                                            <div class="result-bar greenbg" style={{ width: overallresult }}></div>                                                            
                                                            </>
                                                        })()
                                                    }


                                                </div>   

                                                <div class="result-bar-labels">
                                                        <div className='row'>
                                                        {
                                                        (() => {
                                                            if (overallbar <= 50)
                                                            return<p className='resulttextt'>The current situation needs immediate attention as the cost in terms of Performance, Enagement and Development of team is at big risk</p>

                                                            if (overallbar <= 68)
                                                                return<p className='resulttextt'>It is a matter of time when things will start falling apart, and it will show up in blame games, finger pointing, victim cards and helpnessness</p>

                                                                if (overallbar <= 82)
                                                                return<p className='resulttextt'>You have a stable young leader team, check which areas you can support them further in terms of skill set to make them great</p>

                                                                else (overallbar <= 100)
                                                            return<p className='resulttextt'>Your young leaders 9 or first time) managers are doing a very good job, keep feeding and recognising them for what they are doing</p>
                                                        })()
                                                    }
                                                        </div>
                                                    </div>                                             
                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

                <div className='container ptt-30 pbb-40'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <div className='newtblc'>
                                <table>
                                    <tr className='tablefbh'>
                                        <th width="15%">Score Range</th>
                                        <th>Interpretation of Score</th>
                                        <th width="15%">Score (Out of 100)</th>
                                    </tr>


                                    <tr>
                                        <td>50 or Less then 50</td>
                                        <td>The current situation needs immediate attention as the cost in terms of Performance, Enagement and Development of team is at big risk</td>
                                        <td rowspan="4" align='center'>
                                            {
                                                result.slice(0, 1).map((results) => {

                                                    var px = '%'
                                                    var resultc = parseInt(results.q1) + parseInt(results.q2) + parseInt(results.q3) + parseInt(results.q4) + parseInt(results.q5) + parseInt(results.q6) + parseInt(results.q7) + parseInt(results.q8) + parseInt(results.q9) + parseInt(results.q10)
                                                    return (
                                                        <h4 className='yresultc text-center'><span className='thmecc'>{resultc}</span></h4>
                                                    )
                                                })


                                            }
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>51 to 68</td>
                                        <td>It is a matter of time when things will start falling apart, and it will show up in blame games, finger pointing, victim cards and helpnessness</td>
                                    </tr>
                                    <tr>
                                        <td>68 to 82</td>
                                        <td>You have a stable young leader team, check which areas you can support them further in terms of skill set to make them great</td>
                                    </tr>
                                    <tr>
                                        <td>83 Plus</td>
                                        <td>Your young leaders 9 or first time) managers are doing a very good job, keep feeding and recognising them for what they are doing</td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

<br></br>
<br></br>
        </>
    )
}



