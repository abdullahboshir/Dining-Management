import Left from "../components/home/Left";
import Middle from "../components/home/Middle";
import Right from "../components/home/Right";


const Home = () => {


    return (
        <div className="flex justify-center gap-10">

            <div className="bg-gray-500 h-40 w-[350px] rounded-xl sticky top-16 left-0 mt-20 h-[500px]">
                <Left />
            </div>

            <div className="border-2 border-gray-200 h-auto w-[600px] rounded-xl px-3">
                <Middle />
            </div>

            <div className='bg-red-400 h-[500px] w-[350px] rounded-xl sticky top-16 right-0 mt-20'>
                <Right />
            </div>
        </div>
    );
};

export default Home;