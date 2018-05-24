import React, { Component } from 'react';

class homePage extends Component {
    render() {
        return (
            <div className="slideshow-container">
            
                <div className="mySlides fade">
                <div className="numbertext">1 / 5</div>
                <img src="https://i.pinimg.com/736x/f9/42/7f/f9427fba692a540049867c5bae37314b.jpg" style="width:100%"/>
                <div a href="text"className="text">Wedding</div>
                </div>
                
                <div className="mySlides fade">
                <div className="numbertext">2 / 5</div>
                <img src="http://vesania-store.com/wp-content/uploads/2018/01/21St-Birthday-Cake-Decorating-Ideas-Adept-Pic-Of-Bcfeefcccdacfed-Ideas-For-St-Birthday-St-Birthday.jpg" style="width:100%"/>
                <div className="text">Happy Birthday!</div>
                </div>
                
                <div className="mySlides fade">
                <div className="numbertext">3 / 5</div>
                <img src="http://atdisability.com/wp-content/uploads/2018/01/ideas-of-unique-cake-toppers-wedding-about-unique-wedding-cakes-nj-new-jersey-westchester-ny-sweet-of-unique-cake-toppers-wedding.jpg" style="width:100%"/>
                <div className="text">Shit!</div>
                </div>
                
                <div className="mySlides fade">
                <div className="numbertext">4 / 5</div>
                <img src="https://annicasdesignercakes.files.wordpress.com/2015/04/the-story.jpg?w=1080" style="width:100%"/>
                <div className="text">La La Land</div>
                </div>

                <div className="mySlides fade">
                <div className="numbertext">5 / 5</div>
                <img src="https://i0.wp.com/viscawedding.com/wp-content/uploads/2017/10/Horror-Halloween-Wedding-Cakes-Ideas-for-Your-Special-Moment-9.jpg?w=820" style="width:100%"/>
                <div className="text">Dia De Los Muertos</div>
                </div>

                <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a className="next" onclick="plusSlides(1)">&#10095;</a>
                
                
                <br/>
                
                <div style="text-align:center">
                <span className="dot" onclick="currentSlide(1)"></span> 
                <span className="dot" onclick="currentSlide(2)"></span> 
                <span className="dot" onclick="currentSlide(3)"></span>
                <span className="dot" onclick="currentSlide(3)"></span> 
                <span className="dot" onclick="currentSlide(3)"></span>  
                </div>
            </div>
        );
    }
}

export default homePage;
