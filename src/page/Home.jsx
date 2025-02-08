import Banner from "../component/Banner";
import useTitle from "../component/useTitle";


const Home = () => {
   useTitle("Gadgets")
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;