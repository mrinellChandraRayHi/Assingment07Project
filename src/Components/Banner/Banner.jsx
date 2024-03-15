import pic from '../../assets/Banner.jpg'
export default function Banner() {
    return (
        <section className="bg-cover rounded-lg bg-no-repeat bg-[url('https://media.istockphoto.com/id/1416417320/photo/healthy-food-healthy-eating-background-salmon-fruit-vegetable-and-berry-superfood.webp?b=1&s=170667a&w=0&k=20&c=HONfLrKhOcBq0JKWC5JVepfa8gYdt0bRnWv-Y6uIAl8=')] bg-gray-700 bg-blend-overlay">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Discover an exceptional cooking class tailored for you!</h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-3xl bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Explore Now
                    </a>
                    <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-3xl border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Our Feedback
                    </a>  
                </div>
            </div>
        </section>
    )
}
