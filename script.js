document.addEventListener("DOMContentLoaded", function () {

    
    
    

    
    const attractionsData = [
        {
            name: "Rock Garden",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt2XX6io0XSaLQj3FH1CYluKTvyC2WDYijWQ&s",
            desc: "A 40-acre sculpture garden featuring thousands of artworks made from industrial and urban waste.",
            details: "Created by Nek Chand Saini in 1957, this magical garden showcases over 5,000 sculptures made from recycled materials including broken bangles, tiles, and ceramic pots. It is a world-renowned example of visionary raw art.",
            time: "⏰ 9:00 AM - 7:00 PM (Summer) | 9:00 AM - 6:00 PM (Winter)",
            fee: "🎫 ₹30 (Adults), ₹15 (Children)",
            location: "Sector 1, Chandigarh (Near Sukhna Lake)",
            tag: "UNESCO Heritage Class",
            bookingLink: "https://play.google.com/store/apps/details?id=com.chandigarh_tourism",
            bookingText: "Android App"
        },
        {
            name: "Capitol Complex",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpm42T3STzaQbaxz-U98Mp9g7iI5wTUCl8Yw&s",
            desc: "UNESCO World Heritage Site showcasing Le Corbusier's modernist architectural masterpieces.",
            details: "Houses the Legislative Assembly, Secretariat, and High Court. It is the administrative heart of the city and represents Le Corbusier's design philosophy on a monumental scale. Guided tours are highly recommended.",
            time: "⏰ Guided tours: 10:00 AM, 12:00 PM, 3:00 PM (Prior permission required)",
            fee: "🎫 Free (Requires registration/tour pass)",
            location: "Sector 1, Chandigarh",
            tag: "UNESCO World Heritage",
            bookingLink: "https://chandigarhtourism.gov.in/capitol-complex/",
            bookingText: "Book Guided Tour"
        },
        {
            name: "Sukhna Lake",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DIP9hQodNRcQ9-jrWUYRGV9bta2OI2x-bg&s",
            desc: "A serene man-made reservoir perfect for morning walks, boating, and sunset views.",
            details: "A 3 km² rain-fed lake created in 1958 by damming the Sukhna Choe. It serves as a sanctuary for migratory birds and is the most popular outdoor spot for jogging, boating, and enjoying local street food.",
            time: "⏰ 5:00 AM - 10:00 PM Daily",
            fee: "🎫 Free entry (Boating charges apply)",
            location: "Sector 1, Chandigarh",
            tag: "Scenic & Nature",
            bookingLink: "https://chandigarhtourism.gov.in/",
            bookingText: "Official Portal"
        },
        {
            name: "Chandigarh Bird Park",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3RJ8kSSONlnIIHuMxR0f9eoXDp05nvyTdHA&s",
            desc: "India's largest walk-in aviary at Lake Reserved Forest, hosting exotic species in natural environments.",
            details: "Inaugurated in November 2021, the park has been established by the Forest Department to create an appreciation of nature. It features massive walk-in aviaries, lush green pathways, and hundreds of colorful birds including Macaws, Cockatoos, and Budgerigars.",
            time: "⏰ 10:00 AM - 5:00 PM (Closed Mondays & Tuesdays)",
            fee: "🎫 ₹50 (Adults), ₹30 (Children), ₹100 (Foreigners)",
            location: "Lake Reserved Forest, Near Sukhna Lake, Sector 1",
            tag: "Nature & Wildlife",
            bookingLink: "https://play.google.com/store/apps/details?id=com.chandigarh_tourism",
            bookingText: "Android App"
        },
        {
            name: "Rose Garden",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQepdquCWjQjhXtsvBWCruIaPA-gGH7-MlEsw&s",
            desc: "Asia's largest rose garden with over 1,600 varieties spread across 30 acres.",
            details: "Named after India's former President Dr. Zakir Hussain. Home to 1,600 different species of roses and 32,500 varieties of trees. The annual Rose Festival is hosted here in February-March, drawing thousands of tourists.",
            time: "⏰ 6:00 AM - 10:00 PM Daily",
            fee: "🎫 Free entry",
            location: "Jan Marg, Sector 16, Chandigarh",
            tag: "Nature & Botanical",
            bookingLink: "https://chandigarhtourism.gov.in/",
            bookingText: "Official Portal"
        },
        {
            name: "Sector 17 Plaza",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRze_oR49_03KWcsPtXuMF5EPgIBVZ959Ntlg&s",
            desc: "The city's commercial heart featuring open pedestrian spaces, shopping, and dining.",
            details: "India's largest pedestrian shopping plaza, designed as the downtown of Chandigarh. Features lush fountains, high-end retail stores, local boutiques, government emporiums, and cultural music events on weekends.",
            time: "⏰ 10:00 AM - 10:00 PM",
            fee: "🎫 Free entry",
            location: "Sector 17, Chandigarh",
            tag: "Shopping & Culture",
            bookingLink: "https://chandigarhtourism.gov.in/",
            bookingText: "Official Portal"
        },
        {
            name: "Open Hand Monument",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaU32uyxuL3oaF2-AUktI380RVEhK7BIHiLQ&s",
            desc: "Le Corbusier's iconic 26-meter high sculpture symbolizing peace and prosperity.",
            details: "The official emblem of Chandigarh. This rotating sculpture stands 26 meters high and represents Le Corbusier's philosophy: 'the hand to give and the hand to take; peace and reconciliation'. Set against the Shivalik hills.",
            time: "⏰ 9:00 AM - 8:00 PM (Requires entry pass from Secretariat)",
            fee: "🎫 Free entry",
            location: "Capitol Complex, Sector 1, Chandigarh",
            tag: "Monument & Art",
            bookingLink: "https://chandigarhtourism.gov.in/capitol-complex/",
            bookingText: "Get Entry Pass"
        },
        {
            name: "Le Corbusier Centre",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh6O9-TDY5oZHzYXdhqdHI1vnt76WuwfyFDQ&s",
            desc: "The historic building where Chandigarh was planned, now a museum of archives and design.",
            details: "Located in the former office of the project team that built the city, this centre displays drawings, plans, furniture designed by Pierre Jeanneret, and historical documents describing the creation of the city.",
            time: "⏰ 10:00 AM - 5:00 PM (Closed Mondays)",
            fee: "🎫 Free entry",
            location: "Sector 19-B, Madhya Marg, Chandigarh",
            tag: "History & Museum",
            bookingLink: "https://chandigarhtourism.gov.in/",
            bookingText: "Official Portal"
        },
        {
            name: "Government Museum",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWGRf6AN9q4l5mT0YYFLROP0Aykfvzhmh5BQ&s",
            desc: "One of India's finest museums showcasing Gandhara sculptures and Pahari miniatures.",
            details: "Features a priceless collection of Gandharan Buddhist sculptures, Pahari miniature paintings, decorative arts, and contemporary Indian art, housed in an architectural masterpiece designed by Le Corbusier.",
            time: "⏰ 10:00 AM - 4:45 PM (Closed Mondays)",
            fee: "🎫 ₹30 (Adults), ₹15 (Students)",
            location: "Sector 10-C, Chandigarh",
            tag: "Art & Heritage",
            bookingLink: "https://chandigarhtourism.gov.in/",
            bookingText: "Official Portal"
        },
        {
            name: "Japanese Garden",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_J4M86W1dZffxYDq8sx96TOJeFJCWaX7Rjw&s",
            desc: "Authentic Japanese landscape garden with pagodas, Zen structures, and koi ponds.",
            details: "Spread over 13 acres, features a pagoda tower, meditation hut, Zen garden, wooden bridges, waterfall, and Japanese food courts, connected by an illuminated underground tunnel with murals.",
            time: "⏰ 5:00 AM - 11:00 PM Daily",
            fee: "🎫 Free entry",
            location: "Sector 31-A, Chandigarh",
            tag: "Nature & Scenic",
            bookingLink: "https://chandigarhtourism.gov.in/",
            bookingText: "Official Portal"
        },
        {
            name: "War Memorial",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4wwFRFr7UGkNfWNE4G1ioLOvV1e6-3SB9Q&s",
            desc: "Asia's largest post-independence war memorial set in a beautiful garden.",
            details: "Inaugurated by President Dr. A.P.J. Abdul Kalam in 2006, this memorial features five sandstone pillars inscribed with the names of nearly 8,500 martyrs from Punjab, Haryana, Himachal, and Chandigarh since 1947.",
            time: "⏰ 5:00 AM - 9:00 PM Daily",
            fee: "🎫 Free entry",
            location: "Bougainvillea Garden, Sector 3, Chandigarh",
            tag: "Monument & Memorial",
            bookingLink: "https://chandigarhtourism.gov.in/",
            bookingText: "Official Portal"
        },
        {
            name: "Garden of Silence",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPeG45UA-ra_Mzrjbd27yW1XAFRd9fXF210Q&s",
            desc: "A meditative and serene landscape garden housing a majestic seated Buddha.",
            details: "Located at the tail end of Sukhna Lake, this tranquil garden features a colossal white Buddha statue in a meditative posture, encircled by concentric rings of stairs and soothing lights. A peaceful place for yoga and silence.",
            time: "⏰ 6:00 AM - 10:00 PM Daily",
            fee: "🎫 Free entry",
            location: "Sukhna Lake (Back End), Sector 1, Chandigarh",
            tag: "Scenic & Meditative",
            bookingLink: "https://chandigarhtourism.gov.in/",
            bookingText: "Official Portal"
        },
        {
            name: "Pinjore Gardens",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkFk8aPRARDYU9vX7ds_L-NcK8zbEOrH1vew&s",
            desc: "17th-century Mughal Garden with terraced lawns and historical fountains.",
            details: "Also known as Yadavindra Gardens, located 20 km from Chandigarh. Built in the 17th century by Fidai Khan, it covers 100 acres with seven descending terraces, grand pavilions, waterfalls, and a Japanese-style mini zoo.",
            time: "⏰ 7:00 AM - 9:30 PM Daily",
            fee: "🎫 ₹25 (Adults)",
            location: "Pinjore, Haryana (20 km from Chandigarh on Shimla Highway)",
            tag: "Mughal Heritage",
            bookingLink: "https://chandigarhtourism.gov.in/",
            bookingText: "Official Portal"
        }
    ];

    
    const culinaryData = [
        {
            title: "Punjabi Cuisine",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMD8s0RYag2YJIe7_JCi_k4V20Ggc5e-qpg&s",
            desc: "Authentic North Indian flavors with butter chicken, sarson da saag, dal makhani, and chole bhature.",
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
            desc: "Modern coffee culture meets traditional Indian chai with fresh pastries and gourmet sandwiches.",
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
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRHlYTjA-ex4Dni4q_RLalotUQrM6wrCTDw&s",
            desc: "Vibrant street food scene with golgappas, tikki, chaat, kulcha, and noodles at Sectors 17, 22, 23, 34.",
            icon: "ice-cream",
            recommendations: [
                "Garg Chaat - 7 types of pani for golgappas",
                "Matru Tikki Wala - Mouthwatering tikki variations",
                "Brothers Amritsari Kulcha Hub - Stuffed kulcha",
                "Student Centre (Stu-C) - Budget student favorite"
            ]
        }
    ];

    
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

    
    const toursData = [
        {
            title: "Architectural Heritage Tour",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C72RITNyiIoTwRFBQTLASILCdR-FJJSOmg&s",
            price: "₹2,500",
            rating: "4.9",
            desc: "Explore Le Corbusier's masterpieces including Capitol Complex, High Court, and Open Hand Monument.",
            duration: "4 hours",
            size: "Up to 8 people",
            spots: "Capitol Complex, Open Hand"
        },
        {
            title: "Gardens & Nature Walk",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR4lfzDdsj0_F4qQPEp4MbgNYWY5dd3fN_LQ&s",
            price: "₹2,000",
            rating: "4.8",
            desc: "Discover Chandigarh's lush green spaces from Rock Garden to Rose Garden and Sukhna Lake.",
            duration: "3 hours",
            size: "Up to 12 people",
            spots: "Rock Garden, Sukhna Lake"
        },
        {
            title: "Cultural & Markets Tour",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC02M3wy_5MeDK0c2-64M5x8nOu9YE7UBueQ&s",
            price: "₹2,800",
            rating: "4.9",
            desc: "Experience local life, taste authentic cuisine, and shop at vibrant markets.",
            duration: "5 hours",
            size: "Up to 10 people",
            spots: "Sector 17, Local Eateries"
        },
        {
            title: "Complete City Experience",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLAJpwW95hPFzF2z-jaC0kPfeZ_ABtqoBH9w&s",
            price: "₹4,500",
            rating: "5.0",
            desc: "A comprehensive full-day tour covering architecture, nature, culture, and cuisine.",
            duration: "8 hours",
            size: "Up to 6 people",
            spots: "All Major Attractions"
        }
    ];

    
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

    
    const faqData = [
        {
            question: "What is the best time to visit Chandigarh?",
            answer: "The best time to visit Chandigarh is between October and March when the weather is pleasant with temperatures ranging from 5°C to 20°C. The Rose Festival in February-March is particularly special. Avoid May to July when temperatures can exceed 40°C."
        },
        {
            question: "How long should I plan for a Chandigarh tour?",
            answer: "We recommend at least 2-3 days to explore the major attractions comfortably. A 1-Day tour covers the core highlights (Rock Garden, Capitol Complex, Sukhna Lake), while a 2-Day or 3-Day itinerary lets you experience museums, bird parks, and local hospitality at a relaxed pace."
        },
        {
            question: "What is the CITCO Hop-On Hop-Off Double-Decker Tourist Bus?",
            answer: "It is an open-roof double-decker bus service managed by CITCO that routes through Chandigarh's main tourist spots. A day pass costs ₹100 and allows you to hop on and off at places like Sukhna Lake, Rose Garden, Rock Garden, and Sector 17."
        },
        {
            question: "How do I book tickets for Bird Park or Capitol Complex tours?",
            answer: "You can book tickets in advance for the Bird Park, Rock Garden, and Hop-On Bus through the official Chandigarh Tourism mobile app (available on Google Play Store and iOS App Store). The Capitol Complex tour can be reserved via the official Capitol Complex booking page (https://chandigarhtourism.gov.in/capitol-complex/)."
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
            answer: "Yes, we offer pickup and drop-off from hotels located within Chandigarh city limits, including all official CITCO hotels (Mountview, Shivalikview, Parkview)."
        }
    ];

    
    const itinerariesData = {
        "1day": [
            { time: "09:00 AM", title: "Rock Garden (Sector 1)", desc: "Begin your day by exploring Nek Chand's world-famous 40-acre sculpture garden created entirely out of industrial and domestic waste." },
            { time: "11:30 AM", title: "Capitol Complex & Open Hand", desc: "Take a guided architectural tour of this UNESCO World Heritage Site. View the High Court, Secretariat, Legislative Assembly, and the towering Open Hand Monument." },
            { time: "02:00 PM", title: "Lunch at Sector 17 Plaza", desc: "Head to the city's pedestrian plaza for a traditional Punjabi lunch (Pal Dhaba or Gopal's) and some shopping." },
            { time: "04:30 PM", title: "Sunset at Sukhna Lake", desc: "End your highlights tour with a serene walk along the lake, enjoy boating, and watch the sunset behind the Shivalik hills." }
        ],
        "2day": [
            { time: "Day 1 - 09:00 AM", title: "Rock Garden & Bird Park", desc: "Start at the Rock Garden. Right next door, step into the spectacular Chandigarh Bird Park walk-in aviary at Lake Reserved Forest." },
            { time: "Day 1 - 12:00 PM", title: "Capitol Complex Guided Tour", desc: "Witness Le Corbusier's concrete marvels and get group photographs at the iconic Open Hand Monument." },
            { time: "Day 1 - 02:30 PM", title: "Lunch & Walk in Sector 10 Museums", desc: "Have lunch in Sector 9/10, then visit the Government Museum and Art Gallery to appreciate Gandharan art." },
            { time: "Day 1 - 05:00 PM", title: "Sukhna Lake Promenade", desc: "Stroll along the 3 km walking track at Sukhna Lake, enjoying the evening breeze." },
            { time: "Day 2 - 09:00 AM", title: "Rose Garden (Sector 16)", desc: "Start the second morning surrounded by thousands of rose species and mature trees in a peaceful park layout." },
            { time: "Day 2 - 11:30 AM", title: "Le Corbusier Centre (Sector 19)", desc: "Explore the planning archives, original drawings, and historical documents in the architect's actual former office." },
            { time: "Day 2 - 02:00 PM", title: "Leisure Lunch & Shopping", desc: "Eat at Nik Bakers in Sector 35 and browse for traditional Phulkari embroidery items in the Sector 22 markets." },
            { time: "Day 2 - 04:30 PM", title: "Japanese Garden (Sector 31)", desc: "Walk through Pagodas, Zen gardens, and the illuminated underground tunnel." },
            { time: "Day 2 - 06:30 PM", title: "Garden of Silence (Sukhna Tail)", desc: "Sit quietly under the beautifully illuminated massive Buddha statue for a meditative end to the day." }
        ],
        "3day": [
            { time: "Day 1", title: "The Architectural Core & Lake", desc: "Complete highlights: Rock Garden, Chandigarh Bird Park, Capitol Complex, Open Hand, Sector 17 Plaza, and Sukhna Lake sunset." },
            { time: "Day 2", title: "Gardens, History & Shopping Trails", desc: "Explore Rose Garden, Le Corbusier Centre, Sector 10 Art Museum, Japanese Garden, and shop for local handicrafts in Sector 22." },
            { time: "Day 3 - 09:30 AM", title: "Hop-On Hop-Off Double-Decker Bus Tour", desc: "Book a ₹100 pass and ride on the top deck of the official tourist bus. Traverse the sector lanes, hopping off wherever you like." },
            { time: "Day 3 - 01:00 PM", title: "Lunch & Modern Entertainment", desc: "Visit Elante Mall, the region's largest shopping center, for high-end dining, movies, and shopping brands." },
            { time: "Day 3 - 04:00 PM", title: "Pinjore Mughal Gardens Day Trip", desc: "Take a taxi/bus 20 km out to the historic 17th-century Yadavindra Gardens. Marvel at the terraced lawns and illuminated water channels." }
        ]
    };

    
    const citcoHotelsData = [
        {
            name: "Hotel Mountview",
            rating: "4.9",
            location: "Sector 10, Chandigarh",
            desc: "The city's only government-run five-star deluxe hotel. Set against beautiful lawns, offering luxury dining, a health club, and premium suites.",
            img: "https://gos3.ibcdn.com/80ec3494641b11e98fac0242ac110003.jpg",
            amenities: ["5-Star Deluxe", "Swimming Pool", "Spa & Gym", "Fine Dining", "Lawn Bar"],
            link: "https://citcochandigarh.com/"
        },
        {
            name: "Hotel Shivalikview",
            rating: "4.7",
            location: "Sector 17, Chandigarh",
            desc: "A premium business-class hotel in the heart of Sector 17 shopping plaza. Offers spacious rooms, multiple dining outlets, and excellent meeting venues.",
            img: "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/09/06/Pictures/_f585192c-b19e-11e8-a206-120fd6da8a0d.jpg",
            amenities: ["City Center", "Multi-cuisine Resto", "Business Center", "Free Wi-Fi", "Bar"],
            link: "https://citcochandigarh.com/"
        },
        {
            name: "Hotel Parkview",
            rating: "4.5",
            location: "Sector 24, Chandigarh",
            desc: "A massive, budget-friendly garden resort with comfortable, spacious rooms, multi-cuisine restaurant, and sprawling lawns, perfect for families.",
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/b2/df/a3/an-okay-hotel-you-can.jpg?w=900&h=500&s=1",
            amenities: ["Budget Friendly", "Sprawling Lawns", "Restaurant", "Conference Hall", "Family Suites"],
            link: "https://citcochandigarh.com/"
        },
        {
            name: "UT State Guest House",
            rating: "4.6",
            location: "Sector 6, Chandigarh",
            desc: "Government-operated premium guest house located in the elite Sector 6 neighborhood. Quiet, clean, and highly secure stay experience.",
            img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/31/03/bf/ut-guest-house.jpg?w=700&h=400&s=1",
            amenities: ["VVIP Location", "Serene Atmosphere", "Lush Lawns", "Affordable", "Secure"],
            link: "http://admser.chd.nic.in/booking/Webpages/booking1.aspx"
        }
    ];

    
    
    

    
    function renderAttractions() {
        const grid = document.getElementById("attractions-grid");
        if (!grid) return; 

        grid.innerHTML = attractionsData.reduce(function (acc, attr) {
            
            return acc + `
            <div class="attraction-card group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 border border-slate-200/10 sm:last:col-span-2 lg:last:col-span-1 lg:last:col-start-2" data-name="${attr.name}">
                <img src="${attr.img}" alt="${attr.name}"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>
                
                <!-- Category Badge on Card -->
                <div class="absolute top-4 left-4 bg-teal-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                    ${attr.tag}
                </div>

                <div class="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 class="text-xl font-serif font-bold mb-1">${attr.name}</h3>
                    <p class="text-xs text-slate-200 line-clamp-2">${attr.desc}</p>
                    <div class="flex items-center gap-1.5 mt-2.5 text-[10px] text-teal-300 font-semibold uppercase tracking-wider">
                        <i data-lucide="arrow-up-right" class="h-3 w-3"></i>
                        <span>Click for details</span>
                    </div>
                </div>
            </div>`;
        }, '');
    }

    
    function renderCulinary() {
        const grid = document.getElementById("culinary-grid");
        if (!grid) return;

        grid.innerHTML = culinaryData.reduce(function (acc, item) {
            
            const recommendationsHtml = item.recommendations.reduce(function (recAcc, rec) {
                return recAcc + `
                    <li class="flex items-start gap-2">
                        <span class="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0"></span>
                        <span>${rec}</span>
                    </li>`;
            }, '');

            return acc + `
            <div class="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden hover-card">
                <div class="relative h-48 overflow-hidden">
                    <img src="${item.img}" alt="${item.title}"
                        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                </div>
                <div class="p-6">
                    <div class="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center mb-4 border border-teal-100">
                        <i data-lucide="${item.icon}" class="h-6 w-6 text-teal-600"></i>
                    </div>
                    <h4 class="text-xl font-serif font-bold mb-2 text-slate-900">${item.title}</h4>
                    <p class="text-slate-500 mb-4 text-sm">${item.desc}</p>
                    <div class="space-y-2">
                        <p class="text-xs font-bold text-slate-800 uppercase tracking-wider">Top Recommendations:</p>
                        <ul class="text-sm text-slate-655 space-y-2">
                            ${recommendationsHtml}
                        </ul>
                    </div>
                </div>
            </div>`;
        }, '');
    }

    
    function renderFestivals() {
        const grid = document.getElementById("festivals-grid");
        if (!grid) return;

        grid.innerHTML = festivalsData.reduce(function (acc, fest) {
            return acc + `
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover-card">
                <div class="flex justify-between items-start gap-4 mb-3">
                    <h4 class="text-lg font-serif font-bold text-slate-900">${fest.title}</h4>
                    <span class="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full uppercase tracking-wider whitespace-nowrap border border-indigo-100/50">${fest.date}</span>
                </div>
                <p class="text-sm text-slate-555 leading-relaxed">${fest.desc}</p>
            </div>`;
        }, '');
    }

    
    function renderEntertainment() {
        const grid = document.getElementById("entertainment-grid");
        if (!grid) return;

        grid.innerHTML = entertainmentData.reduce(function (acc, group) {
            
            const itemsHtml = group.items.reduce(function (itemAcc, item) {
                return itemAcc + `
                    <li class="flex items-start gap-2.5">
                        <span class="h-1.5 w-1.5 rounded-full bg-teal-600 mt-2 flex-shrink-0"></span>
                        <span>${item}</span>
                    </li>`;
            }, '');

            return acc + `
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover-card">
                <h4 class="text-lg font-serif font-bold mb-4 text-slate-900">${group.title}</h4>
                <ul class="space-y-2.5 text-sm text-slate-655">
                    ${itemsHtml}
                </ul>
            </div>`;
        }, '');
    }

    
    function renderTours() {
        const grid = document.getElementById("tours-grid");
        if (!grid) return;

        grid.innerHTML = toursData.reduce(function (acc, tour) {
            return acc + `
            <div class="group overflow-hidden rounded-3xl bg-white border border-slate-250/60 hover:border-teal-500/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full justify-between">
                <div>
                    <div class="relative h-60 overflow-hidden">
                        <img src="${tour.img}" alt="${tour.title}"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-md border border-slate-100">
                            <span class="font-bold text-teal-600">${tour.price}</span>
                            <span class="text-[10px] text-slate-500 ml-0.5">/ person</span>
                        </div>
                        <div class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 border border-slate-100">
                            <i data-lucide="star" class="h-3.5 w-3.5 fill-amber-400 text-amber-400"></i>
                            <span class="font-semibold text-xs text-slate-800">${tour.rating}</span>
                        </div>
                    </div>

                    <div class="p-6">
                        <h3 class="text-2xl font-serif font-bold text-slate-900 group-hover:text-teal-600 transition-colors">
                            ${tour.title}
                        </h3>
                        <p class="text-sm text-slate-555 leading-relaxed mt-2">${tour.desc}</p>

                        <div class="space-y-2.5 my-5 p-4 bg-slate-50/70 border border-slate-100 rounded-2xl">
                            <div class="flex items-center gap-3 text-xs text-slate-700">
                                <i data-lucide="clock" class="h-4 w-4 text-teal-600 flex-shrink-0"></i>
                                <span class="font-medium">${tour.duration}</span>
                            </div>
                            <div class="flex items-center gap-3 text-xs text-slate-700">
                                <i data-lucide="users" class="h-4 w-4 text-teal-600 flex-shrink-0"></i>
                                <span class="font-medium">${tour.size}</span>
                            </div>
                            <div class="flex items-center gap-3 text-xs text-slate-700">
                                <i data-lucide="map-pin" class="h-4 w-4 text-teal-600 flex-shrink-0"></i>
                                <span class="font-medium">${tour.spots}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="px-6 pb-6 pt-1">
                    <button class="tour-book-btn w-full bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-200 py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2" data-title="${tour.title}">
                        Book This Tour
                        <i data-lucide="arrow-right" class="h-4 w-4"></i>
                    </button>
                </div>
            </div>`;
        }, '');
    }

    
    function renderTestimonials() {
        const grid = document.getElementById("testimonials-grid");
        if (!grid) return;

        grid.innerHTML = testimonialsData.reduce(function (acc, test) {
            let starsHtml = '';
            
            for (let i = 0; i < test.stars; i = i + 1) {
                starsHtml = starsHtml + '<i data-lucide="star" class="h-4 w-4 text-amber-500 fill-amber-500"></i>';
            }

            return acc + `
            <div class="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300">
                <div class="flex gap-1 mb-4">
                    ${starsHtml}
                </div>
                <p class="text-slate-655 text-sm mb-6 leading-relaxed italic">${test.text}</p>
                <div class="flex items-center gap-3">
                    <img src="${test.img}" alt="${test.name}" class="w-11 h-11 rounded-full object-cover border border-slate-100">
                    <div>
                        <div class="font-semibold text-slate-900 text-sm">${test.name}</div>
                        <div class="text-xs text-slate-500">${test.location}</div>
                    </div>
                </div>
            </div>`;
        }, '');
    }

    
    function renderFAQs() {
        const container = document.getElementById("faq-container");
        if (!container) return;

        container.innerHTML = faqData.reduce(function (acc, faq) {
            return acc + `
            <div class="border-b border-slate-200">
                <details class="group">
                    <summary class="flex w-full items-center justify-between py-4 font-medium text-left cursor-pointer text-slate-800 hover:text-teal-650 transition-colors">
                        <span class="text-sm md:text-base font-semibold">${faq.question}</span>
                        <i data-lucide="chevron-down" class="chevron-icon h-4 w-4 text-slate-400 group-hover:text-teal-650"></i>
                    </summary>
                    <div class="pb-5 text-slate-555 text-sm md:text-base leading-relaxed">${faq.answer}</div>
                </details>
            </div>`;
        }, '');
    }

    
    function renderTimeline(duration) {
        const timeline = document.getElementById("itinerary-timeline");
        if (!timeline) return;

        const data = itinerariesData[duration];
        if (!data) return; 

        timeline.innerHTML = data.reduce(function (acc, item) {
            return acc + `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="bg-white border border-slate-200/60 hover:border-teal-500/30 p-5 rounded-2xl shadow-sm hover-card transition-all duration-300">
                    <div class="flex items-center justify-between gap-4 mb-2">
                        <span class="text-[10px] font-bold text-teal-650 bg-teal-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-teal-100/50">${item.time}</span>
                    </div>
                    <h4 class="text-lg font-serif font-bold text-slate-900 mb-1">${item.title}</h4>
                    <p class="text-xs md:text-sm text-slate-555 leading-relaxed">${item.desc}</p>
                </div>
            </div>`;
        }, '');

        
        lucide.createIcons();
    }

    
    function renderCitcoHotels() {
        const grid = document.getElementById("citco-stay-grid");
        if (!grid) return;

        grid.innerHTML = citcoHotelsData.reduce(function (acc, hotel) {
            
            const amenitiesHtml = hotel.amenities.reduce(function (amAcc, amenity) {
                return amAcc + `<span class="text-[9px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded">${amenity}</span>`;
            }, '');

            return acc + `
            <div class="bg-white rounded-3xl border border-slate-200/60 shadow-sm overflow-hidden hover-card flex flex-col h-full justify-between">
                <div>
                    <div class="relative h-44 overflow-hidden">
                        <img src="${hotel.img}" alt="${hotel.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105">
                        <div class="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm text-[10px] font-bold text-teal-600 flex items-center gap-1 border border-slate-100">
                            <i data-lucide="star" class="h-3 w-3 fill-teal-500 text-teal-500"></i>
                            <span>${hotel.rating}</span>
                        </div>
                    </div>
                    <div class="p-5">
                        <h3 class="text-base font-serif font-bold text-slate-900 mb-1 leading-tight">${hotel.name}</h3>
                        <p class="text-[10px] font-semibold text-slate-400 mb-3 flex items-center gap-1">
                            <i data-lucide="map-pin" class="h-3 w-3 text-slate-400"></i> ${hotel.location}
                        </p>
                        <p class="text-xs text-slate-555 leading-relaxed mb-4">${hotel.desc}</p>
                        
                        <div class="flex flex-wrap gap-1.5 mb-4">
                            ${amenitiesHtml}
                        </div>
                    </div>
                </div>
                
                <div class="px-5 pb-5 pt-1">
                    <a href="${hotel.link}" target="_blank" class="w-full inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold py-2.5 rounded-xl shadow-sm transition-all gap-1">
                        Book Stay
                        <i data-lucide="external-link" class="h-3 w-3"></i>
                    </a>
                </div>
            </div>`;
        }, '');

        
        lucide.createIcons();
    }

    
    
    
    function getWeatherIconAndDesc(code, isDay) {
        switch (code) {
            case 0:
                return { icon: isDay ? "sun" : "moon", desc: "Clear Sky" };
            case 1:
            case 2:
                return { icon: isDay ? "cloud-sun" : "cloud-moon", desc: "Partly Cloudy" };
            case 3:
                return { icon: "cloud", desc: "Overcast" };
            case 45:
            case 48:
                return { icon: "cloud-fog", desc: "Foggy" };
            case 51:
            case 53:
            case 55:
                return { icon: "cloud-drizzle", desc: "Drizzle" };
            case 56:
            case 57:
                return { icon: "cloud-drizzle", desc: "Freezing Drizzle" };
            case 61:
            case 63:
            case 65:
                return { icon: "cloud-rain", desc: "Rainy" };
            case 66:
            case 67:
                return { icon: "cloud-rain", desc: "Freezing Rain" };
            case 71:
            case 73:
            case 75:
                return { icon: "snowflake", desc: "Snowing" };
            case 77:
                return { icon: "snowflake", desc: "Snow Grains" };
            case 80:
            case 81:
            case 82:
                return { icon: "cloud-rain-wind", desc: "Rain Showers" };
            case 85:
            case 86:
                return { icon: "snowflake", desc: "Snow Showers" };
            case 95:
            case 96:
            case 99:
                return { icon: "cloud-lightning", desc: "Thunderstorm" };
            default:
                return { icon: "cloud", desc: "Cloudy" };
        }
    }

    
    function fetchLiveWeather() {
        const weatherDetails = document.getElementById("weather-details");
        const iconWrapper = document.getElementById("weather-icon-wrapper");
        if (!weatherDetails) return;

        
        weatherDetails.innerHTML = `
            <div class="flex flex-col items-center justify-center py-3">
                <div class="h-5 w-5 rounded-full border-2 border-teal-600 border-t-transparent animate-spin mb-2"></div>
                <span class="text-slate-400 text-xs font-medium">Fetching live weather...</span>
            </div>
        `;

        const url = "https://api.open-meteo.com/v1/forecast?latitude=30.7333&longitude=76.7794&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m&timezone=Asia%2FKolkata";

        fetch(url)
            .then(function (response) {
                
                if (!response.ok) {
                    throw new Error("Weather API error");
                }
                return response.json(); 
            })
            .then(function (data) {
                const current = data.current;
                const temp = Math.round(current.temperature_2m);
                const humidity = current.relative_humidity_2m;
                const wind = current.wind_speed_10m;
                const code = current.weather_code;
                const isDay = current.is_day;

                
                const weatherInfo = getWeatherIconAndDesc(code, isDay);

                
                if (iconWrapper) {
                    iconWrapper.innerHTML = `<i data-lucide="${weatherInfo.icon}" class="h-6 w-6 text-teal-600" id="weather-icon"></i>`;
                }

                
                weatherDetails.innerHTML = `
                    <div class="flex flex-col items-center justify-center mt-1 animate-fade-in">
                        <div class="text-3xl font-extrabold font-serif text-slate-900 flex items-baseline justify-center">
                            <span>${temp}</span><span class="text-xl text-teal-600 font-semibold ml-0.5">°C</span>
                        </div>
                        <div class="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1.5 flex items-center gap-1.5">
                            <span class="h-2 w-2 rounded-full bg-teal-500 animate-ping"></span>
                            <span>${weatherInfo.desc}</span>
                        </div>
                        <div class="grid grid-cols-2 gap-4 mt-4 pt-3 border-t border-slate-100 text-left w-full">
                            <div>
                                <div class="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Humidity</div>
                                <div class="text-xs font-bold text-slate-700">${humidity}%</div>
                            </div>
                            <div>
                                <div class="text-[10px] text-slate-400 font-medium uppercase tracking-wide">Wind</div>
                                <div class="text-xs font-bold text-slate-700">${wind} km/h</div>
                            </div>
                        </div>
                    </div>
                `;

                
                lucide.createIcons();
            })
            .catch(function (error) {
                console.error("Failed to fetch live weather:", error);
                
                weatherDetails.innerHTML = `
                    <p class="text-sm text-slate-555">
                        Winter: 5-20°C, Summer: 25-45°C, Monsoon: July-September. Pack layers for winter evenings.
                    </p>
                    <div class="text-[10px] text-red-500 font-medium mt-2">Currently showing seasonal averages</div>
                `;
                
                if (iconWrapper) {
                    iconWrapper.innerHTML = `<i data-lucide="cloud" class="h-6 w-6 text-teal-600" id="weather-icon"></i>`;
                }
                lucide.createIcons();
            });
    }

    
    renderAttractions();
    renderCulinary();
    renderFestivals();
    renderEntertainment();
    renderTours();
    renderTestimonials();
    renderFAQs();
    renderTimeline("1day"); 
    renderCitcoHotels();
    fetchLiveWeather(); 

    
    
    

    
    lucide.createIcons();

    
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    
    
    

    
    function bookTour(tourTitle) {
        window.location.hash = "contact"; 
        const tourInput = document.getElementById('tour');
        if (tourInput) {
            tourInput.value = tourTitle; 
            tourInput.focus();           
        }
    }

    
    function switchItinerary(duration) {
        const tabs = document.querySelectorAll('.itinerary-tab');
        
        for (const btn of tabs) {
            btn.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
            btn.classList.add('text-slate-500', 'hover:text-slate-900');
        }

        const activeBtn = document.getElementById(`tab-${duration}`);
        if (activeBtn) {
            
            activeBtn.classList.remove('text-slate-500', 'hover:text-slate-900');
            activeBtn.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
        }

        renderTimeline(duration); 
    }

    
    function openAttractionModal(name) {
        let attr = null;
        
        for (const a of attractionsData) {
            if (a.name === name) {
                attr = a;
                break;
            }
        }
        if (!attr) return; 

        const modal = document.getElementById("attraction-modal");
        const modalImg = document.getElementById("modal-image");
        const modalTitle = document.getElementById("modal-title");
        const modalTag = document.getElementById("modal-tag");
        const modalDesc = document.getElementById("modal-description");
        const modalTimings = document.getElementById("modal-timings");
        const modalFee = document.getElementById("modal-fee");
        const modalLoc = document.getElementById("modal-location");
        const modalBookingLink = document.getElementById("modal-booking-link");

        
        if (modalImg) modalImg.src = attr.img;
        if (modalImg) modalImg.alt = attr.name;
        if (modalTitle) modalTitle.textContent = attr.name;
        if (modalTag) modalTag.textContent = attr.tag;
        if (modalDesc) modalDesc.textContent = attr.details || attr.desc;
        if (modalTimings) modalTimings.textContent = attr.time;
        if (modalFee) modalFee.textContent = attr.fee;
        if (modalLoc) modalLoc.textContent = attr.location;

        
        if (modalBookingLink) {
            const modalBookingLinkIos = document.getElementById("modal-booking-link-ios");
            if (attr.bookingLink) {
                modalBookingLink.href = attr.bookingLink;
                modalBookingLink.classList.remove("hidden");

                if (attr.bookingLink.includes("play.google.com")) {
                    modalBookingLink.innerHTML = `Android App <i data-lucide="play" class="h-3.5 w-3.5"></i>`;
                    if (modalBookingLinkIos) {
                        modalBookingLinkIos.href = "https://apps.apple.com/app/chandigarh-tourism/id1534967396";
                        modalBookingLinkIos.classList.remove("hidden");
                    }
                } else {
                    modalBookingLink.innerHTML = `${attr.bookingText || 'Book E-Tickets'} <i data-lucide="external-link" class="h-3.5 w-3.5"></i>`;
                    if (modalBookingLinkIos) {
                        modalBookingLinkIos.classList.add("hidden");
                    }
                }
            } else {
                modalBookingLink.classList.add("hidden");
                if (modalBookingLinkIos) {
                    modalBookingLinkIos.classList.add("hidden");
                }
            }
        }

        if (modal) {
            modal.classList.remove("hidden");
            document.body.style.overflow = "hidden"; 
        }
        lucide.createIcons(); 
    }

    
    function closeAttractionModal() {
        const modal = document.getElementById("attraction-modal");
        if (modal) {
            modal.classList.add("hidden"); 
            document.body.style.overflow = ""; 
        }
    }

    

    
    const attractionsGrid = document.getElementById("attractions-grid");
    if (attractionsGrid) {
        attractionsGrid.addEventListener('click', function (e) {
            let target = e.target;
            
            while (target && target !== attractionsGrid) {
                if (target.classList && target.classList.contains('attraction-card')) {
                    const name = target.getAttribute('data-name');
                    if (name) {
                        openAttractionModal(name);
                    }
                    break;
                }
                target = target.parentNode; 
            }
        });
    }

    
    const tabContainer = document.getElementById("tab-1day") ? document.getElementById("tab-1day").parentNode : null;
    if (tabContainer) {
        tabContainer.addEventListener('click', function (e) {
            let target = e.target;
            while (target && target !== tabContainer) {
                if (target.classList && target.classList.contains('itinerary-tab')) {
                    const duration = target.getAttribute('data-duration');
                    if (duration) {
                        switchItinerary(duration);
                    }
                    break;
                }
                target = target.parentNode;
            }
        });
    }

    
    const toursSection = document.getElementById("tours");
    if (toursSection) {
        toursSection.addEventListener('click', function (e) {
            let target = e.target;
            while (target && target !== toursSection) {
                if (target.classList && target.classList.contains('tour-book-btn')) {
                    const title = target.getAttribute('data-title');
                    if (title) {
                        bookTour(title);
                    }
                    break;
                }
                target = target.parentNode;
            }
        });
    }

    
    const footer = document.querySelector('footer');
    if (footer) {
        footer.addEventListener('click', function (e) {
            let target = e.target;
            if (target && target.classList.contains('footer-tour-link')) {
                const tourTitle = target.getAttribute('data-tour');
                if (tourTitle) {
                    bookTour(tourTitle);
                }
            }
        });
    }

    
    const modalCloseBtn = document.getElementById('modal-close-btn');
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeAttractionModal);
    }

    
    const modalFooterCloseBtn = document.getElementById('modal-footer-close-btn');
    if (modalFooterCloseBtn) {
        modalFooterCloseBtn.addEventListener('click', closeAttractionModal);
    }

    
    const attractionModal = document.getElementById("attraction-modal");
    if (attractionModal) {
        attractionModal.addEventListener("click", function (e) {
            
            if (e.target === attractionModal) {
                closeAttractionModal();
            }
        });
    }

    
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeAttractionModal();
        }
    });

    
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
            document.body.style.overflow = "hidden"; 
        } else {
            mobileMenu.classList.add('hidden');
            iconMenu.classList.remove('hidden');
            iconClose.classList.add('hidden');
            document.body.style.overflow = ""; 
        }
    }

    if (menuBtn) {
        menuBtn.addEventListener('click', toggleMenu);
    }

    
    for (const link of mobileLinks) {
        link.addEventListener('click', function () {
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                toggleMenu();
            }
        });
    }

    
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); 

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            
            if (nameInput && nameInput.value.trim() === '') {
                alert('Please enter your name.');
                nameInput.focus();
                return;
            }
            if (emailInput && emailInput.value.trim() === '') {
                alert('Please enter your email.');
                emailInput.focus();
                return;
            }
            if (messageInput && messageInput.value.trim() === '') {
                alert('Please enter your message.');
                messageInput.focus();
                return;
            }

            
            alert('Thank you! We will get back to you shortly.');
            contactForm.reset(); 
        });
    }

    
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (event) {
            event.preventDefault(); 
            alert('Subscribed to newsletter.');
            newsletterForm.reset();
        });
    }

    
    let lastScrollY = window.scrollY; 
    const progressBar = document.getElementById('progress-bar');
    let ticking = false; 

    
    function updateScrollState() {
        const headerEl = document.getElementById('main-header');
        if (!headerEl) return;
        const currentScrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        
        if (currentScrollY > 20) {
            headerEl.classList.add('bg-white/95', 'shadow-lg');
            headerEl.classList.remove('bg-white/85');
        } else {
            headerEl.classList.remove('bg-white/95', 'shadow-lg');
            headerEl.classList.add('bg-white/85');
        }

        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            headerEl.classList.add('nav-hidden'); 
        } else if (currentScrollY < lastScrollY) {
            headerEl.classList.remove('nav-hidden'); 
        }

        
        const scrollableHeight = documentHeight - windowHeight;
        const rawProgress = scrollableHeight > 0 ? currentScrollY / scrollableHeight : 0;
        const progress = Math.min(Math.max(rawProgress, 0), 1);
        if (progressBar) {
            progressBar.style.width = `${progress * 100}%`;
        }

        lastScrollY = currentScrollY;
        ticking = false; 
    }

    
    
    
    
    const revealElements = document.querySelectorAll('.scroll-reveal');

    
    if ('IntersectionObserver' in window) {
        
        const revealObserver = new IntersectionObserver(function (entries, observer) {
            for (var i = 0; i < entries.length; i = i + 1) {
                var entry = entries[i];
                
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed'); 
                    
                    observer.unobserve(entry.target);
                }
            }
        }, {
            threshold: 0, 
            rootMargin: '0px 0px 50px 0px' 
        });

        
        for (var j = 0; j < revealElements.length; j = j + 1) {
            revealObserver.observe(revealElements[j]);
        }
    } else {
        
        for (var k = 0; k < revealElements.length; k = k + 1) {
            revealElements[k].classList.add('revealed');
        }
    }

    
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(updateScrollState); 
            ticking = true;
        }
    }, { passive: true });

    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of navLinks) {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();

                
                const mobileMenuEl = document.getElementById('mobile-menu');
                const iconMenuEl = document.getElementById('icon-menu');
                const iconCloseEl = document.getElementById('icon-close');
                if (mobileMenuEl && !mobileMenuEl.classList.contains('hidden')) {
                    mobileMenuEl.classList.add('hidden');
                    if (iconMenuEl) iconMenuEl.classList.remove('hidden');
                    if (iconCloseEl) iconCloseEl.classList.add('hidden');
                    document.body.style.overflow = "";
                }

                
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    }

});