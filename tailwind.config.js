/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }






  <!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="10.png" type="">
    <script src="https://kit.fontawesome.com/de58b7984c.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/daisyui@4.6.0/dist/full.min.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <title>Sports</title>
    <script>
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                clifford: '#da373d',
                'primary': '#FF4240',
                'secondary':'#131318',
                'paragraph': 'rgba(19, 19, 24, 0.60)'
              },
              backgroundImage: {
                'jprogram': "url('2.png')",
                'tprogram': "url('3.png')",
                'sprogram': "url('4.png')"
              }
            }
          }
        }
      </script>
              <style>
                body {
                    font-family: 'Manrope', sans-serif;
                }
                .progress-ring__circle {
                    stroke-dasharray: 400, 400;
                    transition: stroke-dashoffset 0.35s;
                    transform: rotate(-90deg);
                    transform-origin: 50% 50%;
                  }
            </style>
</head>
<body>
    <header class="container mx-auto px-5 lg:px-32">
        <nav class="my-4 lg:my-12">
            <div class="navbar bg-base-100">
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden p-0 pr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base font-normal" >
                            <li><a class="text-primary">Home</a></li>
                            <li><a>About</a></li>
                            <li><a>Pages</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                      </div>
                    <h2 class=" text-2xl lg:text-4xl font-extrabold">Hockey<span class="text-primary">'</span>s</h2>
                </div>
                <div class="navbar-center hidden lg:flex">
                  <ul class="menu menu-horizontal px-1 text-base font-normal">
                    <li><a class="text-primary">Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Pages</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Contact</a></li>
                  </ul>
                </div>
                <div class="navbar-end flex items-center gap-3">
                    <i class="fa-solid fa-magnifying-glass invisible lg:visible" style="color: #292929;"></i>
                  <a class="btn btn-primary bg-primary text-sm lg:text-xl text-white border-0 font-bold">Get Ticket</a>
                </div>
              </div>
        </nav>
        <div class="lg:relative">
            <div class="carousel w-full lg:max-h-[566px]">
                <div id="slide1" class="carousel-item relative w-full">
                  <img src="1.png" class="w-full" />
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" class="btn btn-circle">❮</a> 
                    <a href="#slide2" class="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide2" class="carousel-item relative w-full">
                  <img src="2.png" class="w-full" />
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" class="btn btn-circle">❮</a> 
                    <a href="#slide3" class="btn btn-circle">❯</a>
                  </div>
                </div> 
                <div id="slide3" class="carousel-item relative w-full">
                  <img src="3.png" class="w-full" />
                  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle">❮</a> 
                    <a href="#slide1" class="btn btn-circle">❯</a>
                  </div>
                </div> 
              </div>
              <div class="lg:absolute bottom-8 right-8 bg-secondary p-8 mt-4 lg:mt-0 text-white lg:max-w-[550px] rounded-2xl">
                <h4 class="text-2xl font-extrabold pb-4">Meet all the heroes from the field</h4>
                <p class="text-base font-medium">Discover the inspiring stories of all the hockey heroes who have left an indelible mark in the field.</p>
              </div>
        </div>
    </header> 
    <main class="container mx-auto px-5 lg:px-32">
        <section class="mt-10 lg:mt-24">
            <div class="text-center">
                <hr class="border-t-2 border-dashed border-gray-300 mb-8">
                <h2 class="text-xl lg:text-4xl font-extrabold text-secondary pb-6">Professional Hockeys Club</h2>
                <p class="text-sm lg:text-base font-medium text-paragraph text-wrap ">Welcome to the official website of our esteemed Professional Hockey Club, where passion meets precision.</p>
                <hr class="border-t-2 border-dashed border-gray-300 mt-8">
            </div>
            <div class="flex-row lg:flex mt-11">
                <div class="card bg-base-100">
                    <figure class="px-10 pt-10">
                        <div class="relative w-32 h-32">
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                              <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                              ></circle>
                              <circle
                                class="text-[#FF4240] progress-ring__circle stroke-current"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="calc(400 - (400 * 52) / 100)"
                              ></circle>
                              <text x="50" y="50" font-size="24px" text-anchor="middle" alignment-baseline="middle" font-weight="800">87%</text>
                            </svg>
                        </div> 
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title text-xl font-semibold text-secondary">Prayer Facility</h2>
                      <p class="card-title text-base font-normal text-paragraph text-wrap">Dedicated prayer facility fosters spiritual well-being within our hockey team.</p>
                    </div>
                </div>
                <div class="card bg-base-100">
                    <figure class="px-10 pt-10">
                        <div class="relative w-32 h-32">
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                              <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                              ></circle>
                              <circle
                                class="text-[#49D293] progress-ring__circle stroke-current"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="calc(400 - (400 * 57) / 100)"
                              ></circle>
                                    <text x="50" y="50" font-size="24px" text-anchor="middle" alignment-baseline="middle" font-weight="800">95%</text>
                            </svg>
                        </div> 
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title text-xl font-semibold text-secondary">Experienced Coach</h2>
                      <p class="card-title text-base font-normal text-paragraph text-wrap">"Master tactician, our hockey team's experienced coach, leads with precision."</p>
                    </div>
                </div>
                <div class="card bg-base-100">
                    <figure class="px-10 pt-10">
                        <div class="relative w-32 h-32">
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                              <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                              ></circle>
                              <circle
                                class="text-[#FFB546] progress-ring__circle stroke-current"
                                stroke-width="10"
                                stroke-linecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                stroke-dashoffset="calc(400 - (400 * 53) / 100)"
                              ></circle>
                              <text x="50" y="50" font-size="24px" text-anchor="middle" alignment-baseline="middle" font-weight="800">90%</text>
                            </svg>
                        </div> 
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title text-xl font-semibold text-secondary">Senior Player</h2>
                      <p class="card-title text-base font-normal text-paragraph text-wrap">Seasoned leader, mastering the ice with experience, skill, and resilience.</p>
                    </div>
                </div>
                <!-- progress bar 4 -->
                <div class="card bg-base-100">
                    <figure class="px-10 pt-10">
                        <div class="relative w-32 h-32">
                            <svg class="w-full h-full" viewBox="0 0 100 100">
                              <!-- Background circle -->
                              <circle
                                class="text-gray-200 stroke-current"
                                stroke-width="10"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                              ></circle>
                            <circle>
                              class="text-[#FFB546] progress-ring__circle stroke-current"
                              stroke-width="10"
                              stroke-linecap="round"
                              cx="50"
                              cy="50"
                              r="40"
                              fill="transparent"
                              stroke-dashoffset="calc(400 - (400 * 53) / 100)"
                            ></circle>
                              <text x="50" y="50" font-size="24px" text-anchor="middle" alignment-baseline="middle" font-weight="800">80%</text>
                            </svg>
                        </div> 
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title text-xl font-semibold text-secondary">Training Ground</h2>
                      <p class="card-title text-base font-normal text-paragraph text-wrap">Hockey team's training ground: where dedication and skills shape champions.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-10 lg:mt-24">
          <div class="text-center">
            <hr class="border-t-2 border-dashed border-gray-300 mb-8">
            <h2 class="text-xl lg:text-4xl font-extrabold text-secondary pb-6">Program Sections</h2>
            <p class="text-sm lg:text-base font-medium text-paragraph text-wrap ">Dive into our hockey team's diverse program sections, fostering skill development, teamwork, and a passion for the game's excellence.</p>
            <hr class="border-t-2 border-dashed border-gray-300 mt-8">
        </div>
        <div class="grid grid-rows-3 lg:grid-cols-2 lg:flex-1 gap-6 mt-12">
          <div class="bg-[linear-gradient(45deg,rgba(19,19,24,0.5),rgba(19,19,24,0.5)),url('Images/2.png')] h-[340px] bg-no-repeat bg-cover bg-center rounded-2xl w-full">
            <div class="px-6 py-24 lg:pt-32">
              <h2 class="text-3xl font-extrabold text-white pb-4">Junior Program</h2>
              <p class="text-base font-medium text-white pb-6">Elite skill development for junior hockey players aged 13-18, <br>fostering teamwork, leadership, and sportsmanship.</p>
              <button class="btn btn-primary bg-primary text-sm lg:text-xl text-white border-0 font-bold">Register Now!</button>
            </div>
          </div>
          <div class="bg-[linear-gradient(45deg,rgba(19,19,24,0.5),rgba(19,19,24,0.5)),url('Images/3.png')] h-[340px] bg-no-repeat bg-cover bg-center rounded-2xl w-full">
            <div class="px-6 py-24 lg:p-10 lg:pt-32">
              <h2 class="text-3xl font-extrabold text-white pb-4">Teenager Program</h2>
              <p class="text-base font-medium text-white pb-6">Specialized coaching from seasoned professionals, <br> guiding teenagers toward their full potential on the ice.</p>
              <button class="btn btn-primary bg-primary text-sm lg:text-xl text-white border-0 font-bold">Register Now!</button>
            </div>
          </div>
          <div class="bg-[linear-gradient(45deg,rgba(19,19,24,0.5),rgba(19,19,24,0.5)),url('Images/4.png')] h-[340px] bg-no-repeat bg-cover bg-center rounded-2xl lg:col-span-2 w-full">
            <div class="px-6 py-24 lg:pt-32 lg:pr-[600px]">
              <h2 class="text-3xl font-extrabold text-white pb-4">Professional Program</h2>
              <p class="text-base font-medium text-white pb-6">Holistic program integrating physical conditioning, mental resilience, and academic support for promising young athletes.</p>
              <button class="btn btn-primary bg-primary text-sm lg:text-xl text-white border-0 font-bold">Register Now!</button>
            </div>
          </div>
        </div>
        </section>
    </main>
</body>
</html>

