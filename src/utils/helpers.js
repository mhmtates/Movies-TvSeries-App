

export const minutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours}s ${mins}d`;
}


export const ratingToPercentage = (rating) => {
    return (rating * 10)?.toFixed(0);
};

export const resolveRatingColor = (rating) => {
    if (rating >= 7) {
        return "green.400";
    } else if (rating >= 5) {
        return "orange.400";
    } else {
        return "red.400";
    }

};

// React Slick Slider Ayarları
export const sliderSettings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 5,  // Aynı anda 5 kart gösterilecek
    slidesToScroll: 2, // 2 kart kayacak
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
    ]
  };




