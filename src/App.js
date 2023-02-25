import './App.css';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className='sm:ml-[250px] sm:mt-6 pb-10'>
        <TopNav />
        <div className='flex flex-col items-center justify-center mt-10 border-b border-gray-600 pb-10'>
          <p className='text-lg'>Total account balance</p>
          <h2 className='mt-4 text-5xl text-white font-bold space-x-6'>$50,489.93</h2>
          <div className="flex mt-6 justify-center px-6">
            <div className='w-[200px] max-w-[45%] border-b-[5px] rounded-md border-[#5d88e6]'></div>
            <div className='w-[120px] max-w-[35%] border-b-[5px] rounded-md border-[#eba311]'></div>
            <div className='w-[70px] max-w-[20%] border-b-[5px] rounded-md border-gray-400'></div>
          </div>
          <div className="flex gap-x-9 sm:gap-x-14 mt-6">
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-[#5d88e6]"></div>
              <p className='hidden sm:block sm:mx-3'>USD</p>
              <p className="text-white ml-2">$25,539</p>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-[#eba311]"></div>
              <p className='hidden sm:block sm:mx-3'>NGN</p>
              <p className="text-white ml-2 sm:ml-0">N125,539</p>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 rounded-full bg-gray-400"></div>
              <p className='hidden sm:block sm:mx-3'>GBP</p>
              <p className="text-white ml-2 sm:ml-0">$25,539</p>
            </div>
          </div>
          <div className="rounded-lg p-3 bg-[#1a1b20] flex mt-10">
            <p> Press </p>
            <span className='px-2 mx-3 h-fit rounded-md bg-white text-black'>/</span>
            <p>to perform your first transaction</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-7 border-b border-gray-700">
          <div className="sm:col-span-4 border-r border-gray-700">
            <div className='sm:h-[280px] w-full flex flex-col px-4 sm:pl-20 justify-center border-b border-gray-600 sm:pr-14'>
              <div className='flex justify-between items-center pt-6'>
                <p className="text-white font-semibold text-xl">Beneficiaries</p>
                <div className='flex items-center'>
                  <p className="text-[#577bbe] mr-2">View all</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="#577bbe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
              <div className="flex justify-center flex-wrap gap-x-8 gap-y-8 mt-10 mb-10 sm:mb-0">
                <div className='flex flex-col justify-center items-center'>
                  <div className="h-20 w-20 rounded-full bg-yellow-900"></div>
                  <p className='text-white mt-3 text-sm mb-1'>Jenny Wilson</p>
                  <p className='text-xs'>bank name</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className="h-20 w-20 rounded-full bg-yellow-300"></div>
                  <p className='text-white mt-3 text-sm mb-1'>Kriston Watson</p>
                  <p className='text-xs'>bank name</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className="h-20 w-20 rounded-full bg-green-300"></div>
                  <p className='text-white mt-3 text-sm mb-1'>Ronald Richard</p>
                  <p className='text-xs'>bank name</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <div className="h-20 w-20 rounded-full bg-orange-300"></div>
                  <p className='text-white mt-3 text-sm mb-1'>Jacob Jones</p>
                  <p className='text-xs'>bank name</p>
                </div>
              </div>
            </div>
            <div className="px-6 sm:pl-20 pt-10 sm:pr-14 border-b border-[#25262b] sm:border-none">
              <div className='flex justify-between items-center mb-10'>
                <p className="text-white font-semibold text-xl">Transactions</p>
                <div className='flex items-center'>
                  <p className="text-[#577bbe] mr-2">View all</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="#577bbe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
              <div className='flex items-center mb-5'>
                <div className="bg-[#25262b] h-12 w-12 rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>
                <div className='ml-4'>
                  <p className="text-white text-sm">From OverlayHq</p>
                  <p className="text-xs mt-1">Jan 13th, 2023</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-white text-sm font-bold">+$10,000</p>
                  <div className='flex mt-1 items-center'>
                    <p className="text-xs mr-1">Due in 3 days</p>
                    <svg className='-mr-[2px] mt-[2px]' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                </div>
              </div>
              <div className='flex items-center mb-5'>
                <div className="bg-[#25262b] h-12 w-12 rounded-2xl flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </div>
                <div className='ml-4'>
                  <p className="text-white text-sm">From Binance</p>
                  <p className="text-xs mt-1">Feb 3rd, 2023</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-white text-sm font-bold">+$5,000</p>
                  <div className='flex mt-1 items-center'>
                    <p className="text-xs mr-1">Due in 23 days</p>
                    <svg className='-mr-[2px] mt-[2px]' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-3 w-full mt-6 sm:mt-0">
            <div className="h-[280px] flex flex-col border-b border-gray-600 justify-center pl-3 sm:pr-6">
              <div className="flex">
                <div className='h-[250px] bg-[#fad898] rounded-l-lg w-[75%]'>
                  <p className='text-black text-3xl pt-6 pl-4 sm:pl-10 font-bold'>Experience True <br /> DIgital Banking <br /> Experience</p>
                </div>
                <div className='h-[250px] bg-[#fcedce] rounded-r-lg w-[25%] relative'>
                  <svg className='mt-9 sm:mt-8 ml-6 ' xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="black" stroke="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  <svg className='absolute -left-10 bottom-5 sm:bottom-9' xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
                </div>
              </div>
            </div>
            <div className="px-6 sm:pl-20 pt-10 sm:pr-6">
              <div className='flex justify-between items-center mb-10'>
                <p className="text-white font-semibold text-xl">Subscriptions</p>
                <div className='flex items-center'>
                  <p className="text-[#577bbe] mr-2">View all</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="#577bbe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </div>
              </div>
              <div className='flex items-center mb-5'>
                <div className="bg-yellow-900 h-12 w-12 rounded-2xl flex items-center justify-center">
                </div>
                <div className='ml-4'>
                  <p className="text-white font-semibold text-sm">From OverlayHq</p>
                  <p className="text-xs mt-1">Jan 13th, 2023</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-white text-sm font-bold">+$10,000</p>
                  <div className='flex mt-1 items-center'>
                    <p className="text-xs mr-1">Due in 3 days</p>
                    <svg className='-mr-[2px] mt-[2px]' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                </div>
              </div>
              <div className='flex items-center mb-5'>
                <div className="bg-red-900 h-12 w-12 rounded-2xl flex items-center justify-center">
                </div>
                <div className='ml-4'>
                  <p className="text-white font-semibold text-sm">From OverlayHq</p>
                  <p className="text-xs mt-1">Jan 13th, 2023</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-white text-sm font-bold">+$10,000</p>
                  <div className='flex mt-1 items-center'>
                    <p className="text-xs mr-1">Due in 3 days</p>
                    <svg className='-mr-[2px] mt-[2px]' xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
