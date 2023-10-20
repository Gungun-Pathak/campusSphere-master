const Index = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-purple-500 to-pink-500 w-full h-screen">
        <header>
          <nav className="bg-black p-5 ">
            <div className="container mx-auto flex  items-center h-9">
              <div className="w-1/4 bg-black p-4 m-2 text-black">
                <p></p>
              </div>
              <div className="w-1/2 bg-black p-4 m-2 text-black">
                <p className="text-xl text-blue-50 font-semibold">
                  CampusSphere-
                  <span className="text-blue-50">
                    {" "}
                    Where Campus Life Comes Alive
                  </span>
                </p>
              </div>
              <div className="w-1/6 bg-black p-4 m-2 text-black justify-self-end">
                <p className="text-xl font-semibold"></p>
              </div>
              <div className="w-1/4 bg-black p-4 m-2 text-black justify-between flex">
                <p className="text-xl font-semibold flex">
                  <button className="bg-white p-2 rounded-md ">
                    Log In/Sign Up
                  </button>
                </p>
              </div>
            </div>
          </nav>
        </header>
        <div>
          <div className="w-1/3">
            <h1 className="font-black text-3xl pt-8 pl-8 text-black">
              Welcome to the World{" "}
              <span className="text-base text-red-800 font-black">
                where academics, fun, connections, and clubs all come together
                in one place.
                
              </span>
              
            </h1>
            </div>
            <div className="flex ">
            <div className="w-1/2">
              <h1 className="text-6xl m-12 text-black font-black">
                CampusSphere
              </h1>
            </div>
            <div className="w-1/2 rounded m-0 h-500 ">
              <img className="rounded-md w-fit h-500"src="https://cdn.discordapp.com/attachments/1164497786964803585/1164497875443654697/ggs-ipu-university-featured-image.png?ex=65436e28&is=6530f928&hm=68e05a7d9e3f71c59ed57853dcd9fbaa41e226a5df75ad3d54a8946637e9b524&"></img>

            </div>
            </div>
          
          <div></div>
        </div>
      </div>
      <div className="h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div class="container mx-auto mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           
            <div class="bg-white p-4 shadow-lg rounded-lg">
                <img src="https://picsum.photos/200/300" alt="Item 1" class="w-full h-32 object-cover rounded-lg mb-2"></img>
                <p class="text-xl font-semibold">Academics</p>
                <p class="text-gray-600"></p>
            </div>

      
            <div class="bg-white p-4 shadow-lg rounded-lg">
                <img src="https://picsum.photos/200/300" alt="Item 2" class="w-full h-32 object-cover rounded-lg mb-2"></img>
                <p class="text-xl font-semibold">Chill Zone</p>
                <p class="text-gray-600"></p>
            </div>

        
            <div class="bg-white p-4 shadow-lg rounded-lg">
                <img src="https://picsum.photos/200/300" alt="Item 3" class="w-full h-32 object-cover rounded-lg mb-2"></img>
                <p class="text-xl font-semibold">Alumini</p>
                <p class="text-gray-600"></p>
            </div>

         
            <div class="bg-white p-4 shadow-lg rounded-lg">
                <img src="https://picsum.photos/200/300" alt="Item 4" class="w-full h-32 object-cover rounded-lg mb-2"></img>
                <p class="text-xl font-semibold">Clubs</p>
                <p class="text-gray-600"></p>
            </div>
        </div>
    </div>

      </div>
    </>
  );
};
export default Index;
