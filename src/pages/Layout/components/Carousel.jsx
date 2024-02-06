const Carousel = () => {
const carousel = [
"https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg",
"https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg",
"https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg",
"https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
]
return (
<div className="carousel w-full mb-7">
    {
    carousel?.map((img,index)=>{
    return (
    <div key={index+1} id={`slide${index+1}`} className="carousel-item relative w-full">
        <img src={img} className="w-full object-cover " />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div>
    )
    })
    }

</div>
)
}

export default Carousel
