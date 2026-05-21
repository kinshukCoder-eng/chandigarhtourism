document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // DATASETS (Chandigarh Tourism Specific)
    // ==========================================

    // 1. Attractions Data
    const attractionsData = [
        {
            name: "Rock Garden",
            img: "https://chandigarhtourism.in/images/places-to-vist/headers/the-rock-garden-of-chandigarh-tourism-entry-fee-timings-holidays-reviews-header.jpg",
            desc: "A 40-acre sculpture garden featuring thousands of artworks made from industrial and urban waste.",
            details: "Created by Nek Chand Saini, this magical garden showcases over 5000 sculptures made from recycled materials including broken bangles, tiles, and ceramic pots.",
            time: "⏰ 9 AM - 6/7 PM",
            fee: "🎫 ₹30 adults"
        },
        {
            name: "Capitol Complex",
            img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Capitol_Complex_Chandigarh_India.jpg",
            desc: "UNESCO World Heritage Site showcasing Le Corbusier's modernist architecture.",
            details: "Houses the Legislative Assembly, Secretariat, and High Court. A masterpiece of 20th-century urban planning designed by Le Corbusier.",
            time: "⏰ Guided tours available",
            fee: "🎫 Free entry"
        },
        {
            name: "Sukhna Lake",
            img: "https://upload.wikimedia.org/wikipedia/commons/5/52/Sukhna_Lake%2C_Chandigarh.jpg",
            desc: "A serene man-made reservoir perfect for morning walks and sunset views.",
            details: "A 3 km² rain-fed lake created in 1958. Popular spot for boating, bird watching, and peaceful walks. Best visited at sunrise or sunset.",
            time: "⏰ 5 AM - 9 PM",
            fee: "🎫 Free entry"
        },
        {
            name: "Rose Garden",
            img: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Rose_Garden%2C_Chandigarh.jpg",
            desc: "Asia's largest rose garden with over 1,600 varieties spread across 30 acres.",
            details: "Named after India's former President Zakir Hussain. Home to 1,600 different species of roses and 32,500 varieties of trees.",
            time: "⏰ 6 AM - 9 PM",
            fee: "🎫 Free entry"
        },
        {
            name: "Sector 17 Plaza",
            img: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Sector_17_Market_Chandigarh.jpg",
            desc: "The city's commercial heart with shopping, dining, and entertainment.",
            details: "India's largest pedestrian shopping plaza stretching across three sectors. Features fountains, retail stores, and cultural spaces.",
            time: "⏰ 10 AM - 10 PM",
            fee: "🎫 Free entry"
        },
        {
            name: "Open Hand Monument",
            img: "download.jpg",
            nameAlt: "Open Hand Monument",
            desc: "Le Corbusier's iconic 26-meter high sculpture symbolizing peace and prosperity.",
            details: "A rotating sculpture that represents 'the hand to give and the hand to take; peace and reconciliation'.",
            time: "⏰ Always Open",
            fee: "🎫 Free entry"
        },
        {
            name: "Government Museum",
            img: "https://upload.wikimedia.org/wikipedia/commons/2/23/Government_Museum_and_Art_Gallery%2C_Chandigarh.jpg",
            desc: "One of India's finest museums with Gandhara sculptures and contemporary art.",
            details: "Features rare Gandharan sculptures, Pahari miniature paintings, and coins housed in a Le Corbusier building.",
            time: "⏰ 10 AM - 5 PM",
            fee: "🎫 ₹30 adults"
        },
        {
            name: "Japanese Garden",
            img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Japanese_Garden%2C_Chandigarh.jpg",
            desc: "Authentic Japanese landscape garden with pagodas and koi ponds.",
            details: "Features a pagoda tower, meditation hut, Zen garden, and wooden bridges connected by an underground tunnel.",
            time: "⏰ 4:30 AM - 11 PM",
            fee: "🎫 Nominal fee"
        },
        {
            name: "Pinjore Gardens",
            img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Yadavindra_Gardens%2C_Pinjore.jpg",
            desc: "17th-century Mughal Garden located 20 km from Chandigarh.",
            details: "100 acres with seven descending terraces, grand pavilions, fountains, and a mini zoo. Beautifully illuminated in evenings.",
            time: "⏰ 7 AM - 9:30 PM",
            fee: "🎫 ₹25 person"
        }
    ];

    // 2. Culinary Delights Data
    const culinaryData = [
        {
            title: "Punjabi Cuisine",
            img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200",
            desc: "Authentic North Indian flavors with butter chicken, sarson da saag, dal makhani, and chole bhature",
            icon: "utensils",
            recommendations: [
                "Pal Dhaba, Sector 28 - Legendary butter chicken",
                "Gopal's, Sector 35 - Famous for chole bhature",
                "Ghazal, Sector 17 - Traditional Punjabi thali",
                "Swagath Restaurant - Multi-cuisine flavors"
            ]
        },
        {
            title: "Cafes & Bakeries",
            img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200",
            desc: "Modern coffee culture meets traditional Indian chai with fresh pastries and gourmet sandwiches",
            icon: "coffee",
            recommendations: [
                "Indian Coffee House, Sector 17 - Iconic filter coffee",
                "Nik Bakers, Sector 35 - Premium brunch & brews",
                "Cafe JC's, Sector 9 - Modern artisan coffee",
                "Virgin Courtyard, Sector 7 - Elegant fine dining"
            ]
        },
        {
            title: "Street Food",
            img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1200",
            desc: "Vibrant street food scene with golgappas, tikki, chaat, kulcha, and noodles at Sectors 17, 22, 23, 34",
            icon: "ice-cream",
            recommendations: [
                "Garg Chaat - 7 types of pani for golgappas",
                "Matru Tikki Wala - Mouthwatering tikki variations",
                "Brothers Amritsari Kulcha Hub - Stuffed kulcha",
                "Student Centre (Stu-C) - Budget student favorite"
            ]
        }
    ];

    // 3. Cultural Events & Festivals Data
    const festivalsData = [
        {
            title: "Annual Rose Festival",
            date: "Feb - March",
            desc: "Three-day celebration at Zakir Hussain Rose Garden with cultural programs, exhibitions, flower competitions, and musical performances."
        },
        {
            title: "Chandigarh Carnival",
            date: "Nov - Dec",
            desc: "Week-long festival featuring music concerts, dance performances, food festivals, art exhibitions, and cultural showcases from across India."
        },
        {
            title: "Saturday Cultural Fest",
            date: "Every Saturday",
            desc: "Three-hour weekly fest at Sector 17 central plaza featuring dance, musical concerts, magic shows, and displays of local art."
        },
        {
            title: "Heritage Walks",
            date: "Year Round",
            desc: "Guided architectural walks through Le Corbusier's masterpieces explaining the vision, design philosophy, and urban planning concepts."
        },
        {
            title: "International Crafts Mela",
            date: "December",
            desc: "Exhibition and sale of traditional crafts, phulkari embroidery, textiles, and artisan products from various Indian states."
        },
        {
            title: "Teej Festival",
            date: "July - Aug",
            desc: "Celebrated with traditional Punjabi fervor featuring Giddha and Bhangra dance performances, colorful processions, and folk music."
        }
    ];

    // 4. Shopping, Arts & Entertainment Data
    const entertainmentData = [
        {
            title: "Shopping Hotspots",
            items: [
                "Sector 17 Market - High-end stores",
                "Elante Mall - Modern shopping",
                "Sector 22 Market - Traditional handicrafts",
                "Palika Bazaar - Budget shopping"
            ]
        },
        {
            title: "Traditional Arts",
            items: [
                "Phulkari embroidery - Needlework",
                "Punjabi Jutti - Handcrafted footwear",
                "Local pottery & handicrafts",
                "Contemporary art galleries in Sector 10"
            ]
        },
        {
            title: "Nightlife & Entertainment",
            items: [
                "Late-night food trails in Sector 17 & 35",
                "Live music venues & pubs in Sector 26",
                "Movie theatres & multiplexes",
                "Night markets & cultural performances"
            ]
        }
    ];

    // 5. Tours Data
    const toursData = [
        {
            title: "Architectural Heritage Tour",
            img: "https://thumbs.dreamstime.com/b/rock-garden-chandigarh-chandigarh-india-november-rock-garden-chandigarh-sculpture-garden-chandigarh-india-also-99250459.jpg",
            price: "₹2,500",
            rating: "4.9",
            desc: "Explore Le Corbusier's masterpieces including Capitol Complex, High Court, and Open Hand Monument.",
            duration: "4 hours",
            size: "Up to 8 people",
            spots: "Capitol Complex, Open Hand"
        },
        {
            title: "Gardens & Nature Walk",
            img: "https://cdn.getyourguide.com/img/tour/00924e89d7bcb22e.jpeg/98.jpg",
            price: "₹2,000",
            rating: "4.8",
            desc: "Discover Chandigarh's lush green spaces from Rock Garden to Rose Garden and Sukhna Lake.",
            duration: "3 hours",
            size: "Up to 12 people",
            spots: "Rock Garden, Sukhna Lake"
        },
        {
            title: "Cultural & Markets Tour",
            img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/20/33/53.jpg",
            price: "₹2,800",
            rating: "4.9",
            desc: "Experience local life, taste authentic cuisine, and shop at vibrant markets.",
            duration: "5 hours",
            size: "Up to 10 people",
            spots: "Sector 17, Local Eateries"
        },
        {
            title: "Complete City Experience",
            img: "https://blog.lohono.com/wp-content/uploads/2024/08/Sector-17-Market-edited.jpg",
            price: "₹4,500",
            rating: "5.0",
            desc: "A comprehensive full-day tour covering architecture, nature, culture, and cuisine.",
            duration: "8 hours",
            size: "Up to 6 people",
            spots: "All Major Attractions"
        }
    ];

    // 6. Testimonials Data
    const testimonialsData = [
        {
            name: "Priya Sharma",
            location: "Delhi, India",
            text: '"An absolutely wonderful experience! Our guide was knowledgeable and passionate. We discovered parts of Chandigarh we never knew existed."',
            stars: 5,
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150"
        },
        {
            name: "David Martinez",
            location: "Barcelona, Spain",
            text: '"As an architecture enthusiast, this tour exceeded my expectations. The Capitol Complex is breathtaking, and the insights into Le Corbusier\'s vision were fascinating."',
            stars: 5,
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150"
        },
        {
            name: "Anita Desai",
            location: "Mumbai, India",
            text: '"Perfect blend of culture, history, and nature. The gardens tour was peaceful and beautiful. Highly recommend for families!"',
            stars: 5,
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150"
        },
        {
            name: "James Wilson",
            location: "London, UK",
            text: '"Outstanding service from start to finish. The guide was punctual, friendly, and incredibly informative. Learned so much about Le Corbusier\'s vision."',
            stars: 5,
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150"
        },
        {
            name: "Meera Patel",
            location: "Ahmedabad, India",
            text: '"The food and culture tour was exceptional! Got to taste authentic Punjabi dishes and visit places tourists usually miss. Best tour I\'ve taken in India."',
            stars: 5,
            img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150"
        },
        {
            name: "Thomas Chen",
            location: "Singapore",
            text: '"Highly professional and well-organized. The full-day tour covered everything without feeling rushed. Great value for money!"',
            stars: 5,
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150"
        }
    ];

    // 7. FAQ Data
    const faqData = [
        {
            question: "What is the best time to visit Chandigarh?",
            answer: "The best time to visit Chandigarh is between October and March when the weather is pleasant with temperatures ranging from 5°C to 20°C. The Rose Festival in February-March is particularly special. Avoid May to July when temperatures can exceed 40°C."
        },
        {
            question: "How long should I plan for a Chandigarh tour?",
            answer: "We recommend at least 2-3 days to explore the major attractions comfortably. A single day covers the highlights, but additional days allow for a deeper cultural experience and day trips to nearby places like Pinjore Gardens or Kasauli."
        },
        {
            question: "Are the tours suitable for children and elderly visitors?",
            answer: "Yes! Our tours are designed to be accessible for all age groups. We can customize the pace and activities based on your group's needs. Most attractions have wheelchair access, and we can arrange transportation accordingly."
        },
        {
            question: "What is included in the tour price?",
            answer: "Tour prices typically include a professional guide, transportation within the city, entrance fees to attractions, and bottled water. Full-day tours may include lunch. We'll provide a detailed breakdown when you inquire about specific tours."
        },
        {
            question: "Can I customize my tour?",
            answer: "We specialize in creating personalized experiences. Whether you want to focus on architecture, gardens, food, or a mix of everything, we'll design an itinerary that matches your interests and schedule."
        },
        {
            question: "Do you provide hotel pickup and drop-off?",
            answer: "Yes, we offer complimentary pickup and drop-off from hotels located within Chandigarh city limits. For accommodations outside the city, we can arrange transportation for an additional fee."
        },
        {
            question: "What should I wear and bring on the tour?",
            answer: "Wear comfortable walking shoes and weather-appropriate clothing. Bring sunscreen, sunglasses, and a hat for summer visits. Winter evenings can be chilly, so carry a light jacket. Don't forget your camera and a reusable water bottle!"
        },
        {
            question: "Are English-speaking guides available?",
            answer: "Yes, all our guides are fluent in English. We also have guides who speak Hindi, Punjabi, and upon request, other languages including Spanish, French, and German."
        }
    ];

    // ==========================================
    // RENDERING LOGIC
    // ==========================================

    // Helper: Render Attractions
    function renderAttractions() {
        const grid = document.getElementById("attractions-grid");
        if (!grid) return;
        
        grid.innerHTML = attractionsData.map(attr => `
            <div class="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <img src="${attr.img}" alt="${attr.name}"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 class="text-xl font-serif font-bold mb-2">${attr.name}</h3>
                    <p class="text-sm text-gray-200 mb-2">${attr.desc}</p>
                    <p class="text-xs text-gray-300 line-clamp-2 mb-2">${attr.details}</p>
                    <div class="flex flex-wrap gap-4 text-xs text-gray-300 font-medium">
                        <span>${attr.time}</span>
                        <span>${attr.fee}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Helper: Render Culinary Delights
    function renderCulinary() {
        const grid = document.getElementById("culinary-grid");
        if (!grid) return;

        grid.innerHTML = culinaryData.map(item => `
            <div class="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden hover-card">
                <div class="relative h-48 overflow-hidden">
                    <img src="${item.img}" alt="${item.title}"
                        class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                </div>
                <div class="p-6">
                    <div class="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                        <i data-lucide="${item.icon}" class="h-6 w-6 text-blue-600"></i>
                    </div>
                    <h4 class="text-xl font-serif font-semibold mb-2">${item.title}</h4>
                    <p class="text-gray-500 mb-4 text-sm">${item.desc}</p>
                    <div class="space-y-2">
                        <p class="text-sm font-medium text-gray-900">Top Recommendations:</p>
                        <ul class="text-sm text-gray-500 space-y-1">
                            ${item.recommendations.map(rec => `
                                <li class="flex items-start gap-2">
                                    <span class="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></span>
                                    ${rec}
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Helper: Render Cultural Events & Festivals
    function renderFestivals() {
        const grid = document.getElementById("festivals-grid");
        if (!grid) return;

        grid.innerHTML = festivalsData.map(fest => `
            <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover-card">
                <div class="flex justify-between items-start mb-2">
                    <h4 class="text-lg font-serif font-bold">${fest.title}</h4>
                    <span class="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">${fest.date}</span>
                </div>
                <p class="text-sm text-gray-500">${fest.desc}</p>
            </div>
        `).join('');
    }

    // Helper: Render Shopping, Arts & Entertainment Lists
    function renderEntertainment() {
        const grid = document.getElementById("entertainment-grid");
        if (!grid) return;

        grid.innerHTML = entertainmentData.map(group => `
            <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover-card">
                <h4 class="text-lg font-serif font-bold mb-4">${group.title}</h4>
                <ul class="space-y-2 text-sm text-gray-500">
                    ${group.items.map(item => `
                        <li class="flex items-start gap-2">
                            <span class="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></span>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    // Helper: Render Tours
    function renderTours() {
        const grid = document.getElementById("tours-grid");
        if (!grid) return;

        grid.innerHTML = toursData.map(tour => `
            <div class="group overflow-hidden rounded-xl bg-white border-2 border-transparent hover:border-blue-200 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                <div class="relative h-64 overflow-hidden">
                    <img src="${tour.img}" alt="${tour.title}"
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <span class="font-bold text-blue-600">${tour.price}</span>
                        <span class="text-xs text-gray-500 ml-1">/ person</span>
                    </div>
                    <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                        <i data-lucide="star" class="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"></i>
                        <span class="font-semibold text-sm text-gray-900">${tour.rating}</span>
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div class="p-6">
                    <div class="pb-3">
                        <h3 class="text-2xl font-serif font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            ${tour.title}
                        </h3>
                        <p class="text-base text-gray-500 leading-relaxed mt-2">${tour.desc}</p>
                    </div>

                    <div class="space-y-3 mb-6 p-4 bg-gray-50 rounded-lg">
                        <div class="flex items-center gap-3 text-sm text-gray-700">
                            <i data-lucide="clock" class="h-4 w-4 text-blue-600 flex-shrink-0"></i>
                            <span class="font-medium">${tour.duration}</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-gray-700">
                            <i data-lucide="users" class="h-4 w-4 text-blue-600 flex-shrink-0"></i>
                            <span class="font-medium">${tour.size}</span>
                        </div>
                        <div class="flex items-center gap-3 text-sm text-gray-700">
                            <i data-lucide="map-pin" class="h-4 w-4 text-blue-600 flex-shrink-0"></i>
                            <span class="font-medium">${tour.spots}</span>
                        </div>
                    </div>

                    <button class="w-full bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 py-2 px-4 rounded-md font-medium flex items-center justify-center group/btn">
                        Book This Tour
                        <i data-lucide="arrow-right" class="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Helper: Render Testimonials
    function renderTestimonials() {
        const grid = document.getElementById("testimonials-grid");
        if (!grid) return;

        grid.innerHTML = testimonialsData.map(test => `
            <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div class="flex gap-1 mb-4">
                    ${Array.from({ length: test.stars }).map(() => `
                        <i data-lucide="star" class="h-4 w-4 text-yellow-400 fill-yellow-400"></i>
                    `).join('')}
                </div>
                <p class="text-gray-500 mb-6 leading-relaxed">${test.text}</p>
                <div class="flex items-center gap-3">
                    <img src="${test.img}" alt="${test.name}" class="w-12 h-12 rounded-full object-cover">
                    <div>
                        <div class="font-semibold text-gray-900">${test.name}</div>
                        <div class="text-sm text-gray-500">${test.location}</div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Helper: Render FAQs
    function renderFAQs() {
        const container = document.getElementById("faq-container");
        if (!container) return;

        container.innerHTML = faqData.map(faq => `
            <div class="border-b border-gray-200">
                <details class="group">
                    <summary class="flex w-full items-center justify-between py-4 font-medium text-left cursor-pointer hover:text-blue-600 transition-colors">
                        <span>${faq.question}</span>
                        <i data-lucide="chevron-down" class="chevron-icon h-4 w-4 text-gray-500 group-hover:text-blue-600"></i>
                    </summary>
                    <div class="pb-4 text-gray-500 leading-relaxed">${faq.answer}</div>
                </details>
            </div>
        `).join('');
    }

    // Call all render functions to build the DOM dynamically
    renderAttractions();
    renderCulinary();
    renderFestivals();
    renderEntertainment();
    renderTours();
    renderTestimonials();
    renderFAQs();

    // ==========================================
    // INITIALIZE PLUGINS & SCRIPTS
    // ==========================================

    // Initialize Lucide Icons (handles both static and dynamically rendered icons)
    lucide.createIcons();

    // Set Current Year in Footer
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // ==========================================
    // EVENT LISTENERS & INTERACTION LOGIC
    // ==========================================

    // Mobile Menu Handlers
    const header = document.getElementById('main-header');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        if (!mobileMenu || !iconMenu || !iconClose) return;
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            iconMenu.classList.add('hidden');
            iconClose.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
        }
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    });

    // Scroll Logic (Header transparency, Navbar hide, Progress Bar, Parallax)
    let lastScrollY = window.scrollY;
    const heroBg = document.getElementById('hero-bg');
    const progressBar = document.getElementById('progress-bar');
    let ticking = false;

    function updateScrollState() {
        if (!header) return;
        const currentScrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // A. Header Transparency State
        if (currentScrollY > 20) {
            header.classList.add('bg-white/95', 'shadow-lg');
            header.classList.remove('bg-white/80', 'border-gray-200/50');
        } else {
            header.classList.remove('bg-white/95', 'shadow-lg');
            header.classList.add('bg-white/80', 'border-gray-200/50');
        }

        // B. Navbar Hide/Show Logic
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add('nav-hidden');
        } else if (currentScrollY < lastScrollY) {
            header.classList.remove('nav-hidden');
        }

        // C. Progress Bar Logic
        const scrollableHeight = documentHeight - windowHeight;
        const rawProgress = scrollableHeight > 0 ? currentScrollY / scrollableHeight : 0;
        const progress = Math.min(Math.max(rawProgress, 0), 1);
        if (progressBar) {
            progressBar.style.width = `${progress * 100}%`;
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollState);
            ticking = true;
        }
    }, { passive: true });

});