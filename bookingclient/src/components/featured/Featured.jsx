import React from 'react'
import useFetch from '../../hooks/useFetch'
import "./Featured.css"

const Featured = () => {

    const { data, loading, error } = useFetch("http://localhost:8800/api/hotels/countByCity?cities=delhi,jaipur,kolkata")
    return (
        <div className='featured' >
            {loading ? ("Loading Please wait") : (
                <>
                    <div className="featuredItem">
                        <img src="/assets/img/jaipur.jpg" alt="" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Jaipur</h1>
                            <h2>{data[0]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="/assets/img/delhi.jpg" alt="" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Delhi</h1>
                            <h2>{data[1]} properties</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img src="/assets/img/kolkata.jpg" alt="" className="featuredImg" />
                        <div className="featuredTitles">
                            <h1>Kolkata</h1>
                            <h2>{data[2]} properties</h2>
                        </div>
                    </div>
                </>)}
        </div>
    )
}

export default Featured