
export const firstCard = {
    languageImg: "/assets/img/fotos/AdobeStock_158540061.jpg",
    ondemandImg: "/assets/img/fotos/mr-cup-fabien-barral-Fo5dTm6ID1Y-unsplash.jpg",
    languageTitle: "REGULAR SPANISH COURSES",
    ondemandTitle: "ARGENTINE CULTURE COURSES",
    languageText: "Spanish courses designed to immerse students in real-life language settings by developing their speaking, listening, reading, and writing skills. Available for all levels.",
    ondemandText: "Local university professors introduce students to the history, economy, and cultural heritage of the Spanish-speaking countries covered. Available both in English and Spanish."
};

export const secondCard = {
    languageImg: "/assets/img/fotos/AdobeStock_220213829.jpg",
    ondemandImg: "/assets/img/fotos/ruthson-zimmerman-Ws4wd-vJ9M0-unsplash.jpg",
    languageTitle: "TAILOR-MADE COURSES",
    ondemandTitle: "BUSINESS SPANISH",
    languageText: "Courses designed for students with specific needs that regular courses cannot meet, such as advancing at a different pace, focusing on a particular topic or skill, or customized vocabulary for a particular setting/role.",
    ondemandText: "Special program adapted to the needs of those who want to do business in Latin America or with Latin Americans. It includes both the development of specific skills and culture elements to ensure success in business relationships with Hispanic peers."
};

export const thirdCard = {
    languageImg: "/assets/img/fotos/clase-online.jpg",
    ondemandImg: "/assets/img/fotos/estudiante.jpg",
    languageTitle: "CONVERSATION WORKSHOPS",
    ondemandTitle: "AP SPANISH LANGUAGE AND LITERATURE SPECIAL SUPPORT",
    languageText: "Created to help students build confidence to engage in conversation with natives, empower shy speakers, and enhance proficiency in a welcoming environment.",
    ondemandText: "Private tutoring for high school students who need to improve their reading comprehension and writing skills to excel in their Advanced Placement exams. Assistance provided by native Spanish language and literature graduates exclusively."
};

export const changeSectionTitle = (screen) =>{
    if (screen === 'language' || screen === 'home') {
        return 'Language Courses'
    } else if (screen === 'ondemand') {
        return 'On-Demand Courses'
    }
};

export const changeCardImg = (screen, card) => {
    if (screen === 'language' ||screen === 'home') {
        return card.languageImg;
    } else if (screen === 'ondemand') {
        return card.ondemandImg;
    }
} ;

export const changeCardTitle = (screen, card) => {
    if (screen === 'language' ||screen === 'home') {
        return card.languageTitle;
    } else if (screen === 'ondemand') {
        return card.ondemandTitle;
    }
} ;

export const changeCardText = (screen, card) => {
    if (screen === 'language' ||screen === 'home') {
        return card.languageText;
    } else if (screen === 'ondemand') {
        return card.ondemandText;
    }
} ;
