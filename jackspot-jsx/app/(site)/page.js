
import Header from "@/components/Header";

function Home() {
  
  
  
  return (
    <div className="bg-neutral-400 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className='mb-2'>
          <h1 className='text-white text-8xl font-semibold'>
            Welcome back
          </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4'>
          {/* something */}
          </div>
        </div>
      </Header>
    </div> 
  );
}

export default Home;