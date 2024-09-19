interface researchArticlesTypes{
    id:number,
    imgSrc:string,
    title: string,
    topic: string,
    dateOfPublication: string,
    link: string
}

export const researchArticles:researchArticlesTypes[]=[
    {
        id: 1,
        imgSrc:"/bg.jpg",
        title: "Risk factors for fall-related mild traumatic brain injuries among older adults: A Systematic Review",
        topic:  "Neurological",
        dateOfPublication: "12 June, 2024",
        link:"https://www.researchgate.net/publication/376724644_RISK_FACTORS_FOR_FALL-RELATED_MILD_TRAUMATIC_BRAIN_INJURIES_AMONG_OLDER_ADULTS_A_SYSTEMATIC_REVIEW"
    },
    {
        id: 1,
        imgSrc:"/bg-blue.jpg",
        title: "Article 1",
        topic:  "Neurological",
        dateOfPublication: "12 June 2024",
        link:"https://www.linkedin.c"
    }
]