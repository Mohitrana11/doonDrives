import React, { useEffect, useState, useMemo } from "react";
import {
  FaMapMarkerAlt,
  FaArrowUp,
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaFilter,
  FaCopy,
} from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Image Imports ---
import robbers2 from "../assets/locations/robbers.jpg";
import robbers3 from "../assets/locations/roberscave1.jpg";
import robbers4 from "../assets/locations/roberscave3.jpg";
import sahas1 from "../assets/locations/shashdharaa.jpg";
import sahas2 from "../assets/locations/shashdhara3.jpg";
import sahas3 from "../assets/locations/shashdhara4.jpg";
import fri1 from "../assets/locations/Fri.jpg";
import fri2 from "../assets/locations/fri2.jpg";
import fri3 from "../assets/locations/fri3.jpg";
import monastery1 from "../assets/locations/clement1.jpg";
import monastery2 from "../assets/locations/clement.jpeg";
import monastery3 from "../assets/locations/clement3.jpg";
import monastery4 from "../assets/locations/clementtown2.jpg";
import tapkesh1 from "../assets/locations/tapkeshwar.jpg";
import tapkesh2 from "../assets/locations/tapkeshwar2.jpg";
import tapkesh3 from "../assets/locations/tapkeshwar3.jpg";
import tapkesh4 from "../assets/locations/tapkeshwar4.jpg";
import lachiwala1 from "../assets/locations/lachiwala.jpeg";
import lachiwala2 from "../assets/locations/lachiwala3.jpg";
import malsi1 from "../assets/locations/zoo.jpg";
import malsi2 from "../assets/locations/zoo2.jpg";
import malsi3 from "../assets/locations/zoo3.jpg";
import malsi4 from "../assets/locations/zoo4.jpg";
import khalanga1 from "../assets/locations/khalanga1.jpg";
import khalanga2 from "../assets/locations/khalanga2.jpg";
import khalanga3 from "../assets/locations/khalanga3.jpg";
import asan1 from "../assets/locations/asanbarrage.jpg";
import asan2 from "../assets/locations/assanbarag2.jpg";
import asan3 from "../assets/locations/assanbarage3.jpg";
import bhadraj1 from "../assets/locations/bhadraj.jpg";
import bhadraj2 from "../assets/locations/bhadraj2.jpeg";
import bhadraj3 from "../assets/locations/bhadraj3.jpeg";
import george1 from "../assets/locations/georgeeverest.jpg";
import george2 from "../assets/locations/georgeverest2.jpg";
import george3 from "../assets/locations/georgeverest3.jpg";
import dhanaulti1 from "../assets/locations/dhanaulti.jpg";
import dhanaulti2 from "../assets/locations/dhanaulti2.jpg";
import dhanaulti3 from "../assets/locations/dhanaulty3.jpg";

// --- Places Data ---
const doonPlaces = [
  {
    title: "Robber's Cave (Gucchupani)",
    location: "Gucchupani, Dehradun",
    distance: "8 km from ISBT",
    description:
      "A stunning river cave surrounded by mountains offering adventure, cold water streams and a thrilling walk experience. The cave is famous for its unique natural setup where a stream of water flows inside it, creating a fun, chilly wading experience.",
    images: [robbers3, robbers2, robbers4],
    category: "Nature & Adventure",
  },
  {
    title: "Sahastradhara",
    location: "Sahastradhara Road",
    distance: "14 km from ISBT",
    description:
      "Known for its thousand-fold natural springs, waterfalls, sulphur pools, and beautiful lush green landscape. The water here is believed to have medicinal properties due to the high sulphur content.",
    images: [sahas1, sahas2, sahas3],
    category: "Nature & Waterfalls",
  },
  {
    title: "Forest Research Institute (FRI)",
    location: "Kaulagarh Road",
    distance: "6 km from ISBT",
    description:
      "A grand colonial heritage building with botanical museums, beautiful gardens, and peaceful walkways. It is one of the oldest institutions of its kind, recognized globally for forestry research, and its magnificent structure is a popular shooting location for movies.",
    images: [fri1, fri2, fri3],
    category: "History & Education",
  },
  {
    title: "Mindrolling Monastery",
    location: "Clement Town",
    distance: "4 km from ISBT",
    description:
      "A peaceful Tibetan monastery known for its tall stupa, prayer wheels, Buddhist culture, and calm gardens. It houses the Great Stupa, which is claimed to be the largest stupa in the world and is richly decorated with murals and gold leaf.",
    images: [monastery1, monastery2, monastery3, monastery4],
    category: "Religious & Culture",
  },
  {
    title: "Tapkeshwar Temple",
    location: "Garhi Cantonment",
    distance: "10 km from ISBT",
    description:
      "A natural cave temple dedicated to Lord Shiva with dripping water over the Shivling and forest surroundings. It gets its name from the Hindi word 'Tapa' (to perform penance) and 'Eshwar' (God).",
    images: [tapkesh1, tapkesh2, tapkesh3, tapkesh4],
    category: "Religious & Nature",
  },
  {
    title: "Lachiwala",
    location: "Dehradun",
    distance: "10 km from ISBT",
    description:
      "Famous for natural water pools, greenery, bird watching, and picnic vibes — perfect weekend getaway. The surrounding Sal forests and clean, shallow stream make it a favorite spot for day picnics.",
    images: [lachiwala1, lachiwala2],
    category: "Nature & Picnic",
  },
  {
    title: "Malsi Deer Park",
    location: "Mussoorie Road",
    distance: "12 km from ISBT",
    description:
      "Mini zoo offering deer, peacocks, nature trails, gardens, and a peaceful environment for families. It's a key attraction on the way to Mussoorie, providing excellent views of the Shivalik range.",
    images: [malsi1, malsi2, malsi3, malsi4],
    category: "Family & Wildlife",
  },
  {
    title: "Khalanga War Memorial",
    location: "Dehradun",
    distance: "9 km from ISBT",
    description:
      "A historical site commemorating the brave soldiers who fought in the Anglo-Nepalese war, with scenic surroundings and memorial structures. It stands as a symbol of military honor and bravery.",
    images: [khalanga1, khalanga2, khalanga3],
    category: "History & Memorial",
  },
  {
    title: "Asan Barrage",
    location: "Rishikesh-Dehradun",
    distance: "35 km from ISBT",
    description:
      "A popular bird-watching and picnic spot with a beautiful dam, migratory birds, and tranquil water views. It's officially known as the Asan Conservation Reserve and is a vital wetland for bird species.",
    images: [asan1, asan2, asan3],
    category: "Nature & Bird Watching",
  },
  {
    title: "Bhadraj Temple",
    location: "Dehradun",
    distance: "20 km from ISBT",
    description:
      "A beautiful temple surrounded by mountains, offering serene atmosphere and spiritual vibes. The trek to the temple is popular, offering panoramic views of the Doon Valley and Chakrata range.",
    images: [bhadraj1, bhadraj2, bhadraj3],
    category: "Religious & Trekking",
  },
  {
    title: "George Everest’s House",
    location: "Mussoorie",
    distance: "37 km from ISBT",
    description:
      "Historic residence of the great surveyor George Everest, offering history and beautiful mountain vistas. This is where he meticulously planned the Great Trigonometrical Survey of India, leading to the naming of Mount Everest.",
    images: [george1, george2, george3],
    category: "History & Hill Station",
  },
  {
    title: "Dhanaulti",
    location: "Dhanaulti",
    distance: "60 km from ISBT",
    description:
      "A peaceful hill station with lush deodar forests, eco-parks, and adventure activities like zip-lining. It serves as a quiet escape from the crowds of nearby Mussoorie and is famous for its serene landscape.",
    images: [dhanaulti1, dhanaulti2, dhanaulti3],
    category: "Hill Station & Adventure",
  },
];

const allCategories = ["All", ...new Set(doonPlaces.map((p) => p.category))];

// --- Custom Components ---

const ReadMore = ({ text, maxLength = 150 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedText = text.substring(0, maxLength).trim();
  const shouldTruncate = text.length > maxLength;

  return (
    <p className="description-text">
      {isExpanded || !shouldTruncate ? text : `${truncatedText}...`}
      {shouldTruncate && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          className="read-more-link"
        >
          {isExpanded ? " (Read Less)" : " (Read More)"}
        </span>
      )}
    </p>
  );
};

const CopyButton = ({ textToCopy }) => {
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`copy-button ${isCopied ? "copied-button" : ""}`}
      title={`Copy location: ${textToCopy}`}
    >
      <FaCopy style={{ marginRight: isCopied ? "0" : "5px" }} />
      {isCopied ? "Copied!" : "Copy Name"}
    </button>
  );
};

const SkeletonCard = () => (
  <div className="place-card skeleton-card">
    <div className="skeleton-image"></div>
    <div className="card-content">
      <div
        className="skeleton-line"
        style={{ width: "60%", height: "18px", marginBottom: "15px" }}
      ></div>
      <div
        className="skeleton-line"
        style={{ width: "90%", height: "14px" }}
      ></div>
      <div
        className="skeleton-line"
        style={{ width: "70%", height: "14px" }}
      ></div>
      <div
        className="skeleton-line"
        style={{ width: "100%", height: "12px", marginTop: "20px" }}
      ></div>
    </div>
  </div>
);

const Arrow = ({ className, style, onClick, direction }) => (
  <div
    className={`${className} custom-slick-arrow`}
    style={{
      ...style,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(59, 130, 246, 0.85)",
      color: "#fff",
      width: "42px",
      height: "42px",
      borderRadius: "50%",
      zIndex: 2,
    }}
    onClick={onClick}
  >
    {direction === "next" ? <FaChevronRight /> : <FaChevronLeft />}
  </div>
);

// --- Main Component ---
const DoonTour = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoading(false), 1500);
    const handleScroll = () => setShowTopBtn(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
  };

  const filteredPlaces = useMemo(() => {
    return doonPlaces.filter((place) => {
      const lowerCaseSearch = searchTerm.toLowerCase();
      const matchesSearch =
        place.title.toLowerCase().includes(lowerCaseSearch) ||
        place.description.toLowerCase().includes(lowerCaseSearch) ||
        place.category.toLowerCase().includes(lowerCaseSearch);
      const matchesCategory =
        selectedCategory === "All" || place.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="doon-tour-page">
      <h1 className="page-heading">Discover Dehradun & Nearby</h1>

      <p className="page-sub-text">
        Explore waterfalls, caves, monasteries, temples, hill stations, and all
        the magical locations that make this region a perfect travel
        destination.
      </p>

      <div className="filter-section">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search places..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
            disabled={isLoading}
          />
        </div>

        <div className="category-container">
          <FaFilter style={{ color: "#475569", marginRight: "10px" }} />
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`category-button ${
                selectedCategory === category ? "active-category-button" : ""
              }`}
              disabled={isLoading}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="card-container">
        {isLoading ? (
          Array(6)
            .fill(0)
            .map((_, index) => <SkeletonCard key={index} />)
        ) : filteredPlaces.length > 0 ? (
          filteredPlaces.map((place, index) => (
            <div
              key={index}
              className="place-card card-hover roll-in-fade shine-effect"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Slider {...sliderSettings}>
                {place.images.map((img, idx) => (
                  <div key={idx} className="slider-image-wrapper">
                    <img
                      src={img}
                      alt={`${place.title} ${idx + 1}`}
                      className="main-image"
                      loading="lazy" /* Improves initial load speed */
                      decoding="async" /* Prevents image decoding from blocking UI */
                    />
                  </div>
                ))}
              </Slider>

              <div className="card-content">
                <span className="category-badge">{place.category}</span>
                <h2 className="card-title">{place.title}</h2>

                <div className="title-row">
                  <div className="location-row">
                    <FaMapMarkerAlt style={{ color: "#3b82f6" }} />
                    <span className="location-text">{place.location}</span>
                  </div>
                  <CopyButton textToCopy={place.title} />
                </div>

                <p className="distance-text">
                  <strong>Distance from ISBT:</strong> {place.distance}
                </p>

                <ReadMore text={place.description} maxLength={150} />
              </div>
            </div>
          ))
        ) : (
          <p className="no-results-message">
            No locations found matching your search.
          </p>
        )}
      </div>

      {showTopBtn && (
        <div className="top-btn" onClick={scrollTop}>
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default DoonTour;
