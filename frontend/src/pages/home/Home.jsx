
import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
    return (
        <>
            <div className='flex w-full sm:h-[450px] p-4 md:h-[640px] rounded-lg overflow-hidden  backdrop-blur-lg bg-opacity-100'>
                <Sidebar />
                <MessageContainer />
            </div>
            {/* <div className='flex w-full sm:w-[150px] md:w-[4490px] sm:h-[450px] md:h-[600px] rounded-lg overflow-hidden  bg-opacity-100'>
                <MessageContainer />
            </div> */}
        </>
    );
};


export default Home;